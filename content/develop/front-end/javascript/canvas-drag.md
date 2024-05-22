---
title: Canvas 实现图片元素的缩放、拖拽功能
---

# Canvas 实现图片元素的缩放、拖拽功能

## 前言

原本想好了该写点什么前言，比如 为什么要自己实现这样的功能而不是通过库？

1. 产品所需的高度自定义
2. 不依赖版本库的维护成本更小

既然是产品高度自定义，那么就没有必要去实现高灵活的配置项，所以最终的使用是这样的：

```js
new OperableCanvas([ElementId], [ImageSrc]);
```

## 开始实现

这个 JS 类是采用了 class 所实现，首先需要定义好 class 里的全局属性，最好是写上注释，虽然在命名时考虑到了可读性，但后面接手的人如果不是怎么看得懂英文也可以通过注释去理解这个变量是做什么用的。

### 类属性

```js
/**
 * @canvasNode canvas 画布对象
 * @canvasCtx canvas 的 2d 画布上下文
 * @imageNode {
     target: 绘制到画布上的图片,
     lasSize: 用来计算本次鼠标滚轮缩放后与上次对比需要放置的位置
 }
 * @position 目标元素在画布上的位置，以左上角作为起始坐标
 * @transScale 缩放比例，默认 1
*/

canvasNode = null;
canvasCtx = null;
imageNode = {
  target: null,
  lastSize: { w: 0, h: 0 },
};
position = { x: 0, y: 0 };
transScale = 1;
```

### 初始化

当 new 类对象时，构造函数由于无法使用 `async/await`，因此我需要重新定义一个初始函数，在构造函数调用，并将参数等一并同步。
为什么要重新写一个初始化函数？因为下面的过程都有一个前提，也就是有图片对象 `new Image() or ElementNode`，而这里使用的是 `new Image()`，需要异步获取
在新的初始化函数里，需要做四件事：`获取对象`、`设置初始参数`、`绘制`、`监听事件`

```js
/**
 * @param {string} id 画布ID，暂不支持 TagName, ClassName 等获取方式
 * @param {string} src 图片地址，以网络地址最佳
 * @param {number} width 画布宽，默认父级宽
 * @param {number} height 画布高，默认父级高
 * @returns void
 */

 async initialization (id, src, width, height) {
     let cvs = document.getElemtnById(id);
     let ctx = cvs.getContext('2d');

     let imageTarget = await this.getImageSync(src);

     let cvsParent = cvs.offsetParent;
     cvs.width = width || cvsParent.offsetWidth;
     cvs.height = height || cvsParent.offsetHeight;

     this.position.x = cvs.width / 2 - imageTarget .width / 2;
     this.position.y = cvs.height / 2 - imageTarget .height / 2;

     this.canvasNode = cvs;
     this.canvasCtx = ctx;
     this.imageNode.target = imageTarget;

     if (!imageTarget) {
        this.canvasCtx.textAlign = 'start';
        this.canvasCtx.font = '14px sans-serif';
        this.canvasCtx.fillText('无法加载图片', 30, 40);
        return false;
    }

    this.drawCanvas();
    this.listenMouseWheel();
    this.listenMouseMove();
 }
```

### 获取图片对象

图片加载失败后异步获取到的结果是 `null`，因此需要提示用户，该图片无法渲染绘制

```js
/**
 * 异步获取图片
 * 不是获取图片和真实 DOM
 * @params {string} [src]
 * @return image 对象
 */

async getImageSync (src) {
    const loadImage = async () => {
        return await new Promise(resolve => {
            let img = new Image();
            img.src = src;
            img.onload = () => resolve(img);
            img.onerror = () => resolve(null);
        })
    }
    return await loadImage();
}
```

### 绘制

在初始化函数里配置好初始参数后，即开始绘制。

在重新绘制之前需要清空旧绘制数据，以免影响到新的绘制数据被影响，然后重新计算图片大小，再通过在 `resetPosition` 或初始位置设定好的位置进行绘制

```js
drawCanvas () {
    this.canvasCtx.clearRect(0, 0, this.canvasNode.width, this.canvasNode.height);

    let width = this.imageNode.target.width * this.transScale;
    let height = this.imageNode.target.height * this.transScale;

    this.imageNode.lastSize.w = width;
    this.imageNode.lastSize.h = height;

    this.canvasCtx.drawImage(this.imageNode.target, this.position.x, this.position.y, width, height);
}
```

### 鼠标监听事件

绘制完成，但现在的缩放、拖拽事件还没有完成

这里监听到的鼠标事件是: `mousewheel`、`mousedown`、`mousemove`、`mouseup`

监听画布鼠标滚轮事件 (`mousewheel`) 用来支持缩放，监听事件内调用了 `resetPosition` 重新计算图片绘制位置和 `drawCanvas` 绘制事件

```js
listenMouseWheel () {
    this.canvasNode.addEventListener('mousewheel', e => {
        e.preventDefault();
        this.transScale += (-(Math.min(Math.max(e.deltaY, -1), 1)) * 0.1);
        this.resetPosition(e);
        this.drawCanvas();
    })
}
```

鼠标按下 (`mousedown`) / 鼠标移动 (`mousemove`) / 鼠标放开 (`mouseup`) 监听 `canvas` 内图片元素的拖拽

`mousemove` 事件里在拖拽元素加上鼠标图案变更，让人能明确知道这是可以拖拽的对象

```js
listenMouseMove () {
    let last;
    this.canvasNode.addEventListener('mousedown', e => {
        e.preventDefault();
        last = e;
    });

    this.canvasNode.addEventListener('mousemove', e => {
        e.preventDefault();
        if (
            (e.offsetX >= this.position.x && e.offsetX <= (this.position.x + this.imageNode.target.width * this.transScale)) &&
            (e.offsetY >= this.position.y && e.offsetY <= (this.position.y + this.imageNode.target.height * this.transScale))
        ) {
            this.canvasNode.style.cursor = 'grabbing';
        } else {
            this.canvasNode.style.cursor = 'default';
        }
        if (last) {
            if (last.offsetX != e.offsetX || last.offsetY != e.offsetY) {
                let moveX = e.offsetX - last.offsetX;
                let moveY = e.offsetY - last.offsetY;
                this.position.x = this.position.x + moveX;
                this.position.y = this.position.y + moveY;
                last = e;
                this.drawCanvas();
            }
        }
    });

    this.canvasNode.addEventListener('mouseup', e => {
        e.preventDefault();
        last = null;
    })
}
```

### 计算绘制位置

最后是一个很重要的事件，即重新计算绘制位置，不要以为重新计算位置是多么复杂的事情，细看下去不过是 加减乘除

值得注意的是，重新计算位置函数仅在缩放适用

计算鼠标位置在图片中心点的偏移量

计算公式以 X 轴为例: `mouseOffsetX - positionX - imageWidthRadius`

mouseOffsetX: 鼠标到画布左侧边界的距离
positionX: 初始图片绘制在 X 轴的位置
imageWidthRadius: 图片宽的半径

将偏移量平分为 6，如果偏移量在图片中心点内（半径=10px）则 1/2
可以理解为，鼠标只要不在中心点，偏左即左缩放，偏右即右缩放，其余偏向皆如此。

FAQ：当鼠标在图片对象内的伸缩已经完成，那么在对象外呢？其实是有同样效果的，只是在计算新宽度与原宽度差时没有将鼠标在元素外的因素考虑入内

```js
/**
 * 重新计算绘制位置方法
 * 解释作用的注释将在函数体内进行说明
 * @param {Event} mouseEvent 鼠标事件对象
 */
resetPosition (mouseEvent) {
    let x, y;

    let imgWR = this.imageNode.lastSize.w / 2;
    let imgHR = this.imageNode.lastSize.h / 2;

    let mouseDeviationCenterX = mouseEvent.offsetX - this.position.x - imgWR;
    let mouseDeviationCenterY = mouseEvent.offsetY - this.position.y - imgHR;

    let isCenter = (mouseDeviationCenterX >= -20 && mouseDeviationCenterX <= 20) && (mouseDeviationCenterY >= -20 && mouseDeviationCenterY <= 20);
    let isLeftTop = !!(Math.min(mouseDeviationCenterX, 0)) && !!(Math.min(mouseDeviationCenterY, 0));
    let isRightTop = !!(Math.max(mouseDeviationCenterX, 0)) && !!(Math.min(mouseDeviationCenterY, 0));
    let isLeftBottom = !!(Math.min(mouseDeviationCenterX, 0)) && !!(Math.max(mouseDeviationCenterY, 0));
    // let isRightBottom = !!(Math.max(mouseDeviationCenterX, 0)) && !!(Math.max(mouseDeviationCenterY, 0));

    let newWidthHalf = (this.imageNode.target.width * this.transScale - this.imageNode.lastSize.w) / 6;
    let newHeightHalf = (this.imageNode.target.height * this.transScale - this.imageNode.lastSize.h) / 6;

    if (isCenter) {
        x = this.position.x - newWidthHalf * 3;
        y = this.position.y - newHeightHalf * 3;
    } else {
        x = this.position.x - (newWidthHalf * (isLeftTop || isLeftBottom ? 1 : 5));
        y = this.position.y - (newHeightHalf * (isLeftTop || isRightTop ? 1 : 5));
    }

    this.position.x = x;
    this.position.y = y;
}
```

最后，将以上方法放入 class 中并导出

```js
export default class OperableCanvas {
  // The code
}
```
