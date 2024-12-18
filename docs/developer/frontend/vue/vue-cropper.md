---
title: VueCropper 初级采坑
---

# VueCropper 初级采坑

公司后台项目中有需要用到图片裁剪的功能，在排除了自己写的这个选项之后就是到网上搜索合适的图片裁剪工具，搜索下来推荐最多的就是这个 [vue-cropper](https://github.com/xyxiao001/vue-cropper)，既然名气这么高，那怎么都得试一试。

工具内的许多配置都帮忙设置好了，在没有特殊要求的情况下其实没必要再去设置，所以这里的演示只配置自己需要的，代码中的其它组件基于 [view-design](https://iviewui.com/)。

```vue
<template>
  <div class="cropper-component">
    <Upload action :before-upload="handleUploadIntercept">
      <Avatar :src="userAvatar"></Avatar>
    </Upload>

    <Modal v-model="cropperModal" width="640">
      <VueCropper
        ref="cropper"
        :img="cropperBase64"
        :autoCrop="true"
        :centerBox="true"
        :autoCropWidth="240"
        :autoCropHeight="240"
      ></VueCropper>
      <div slot="footer" align="right">
        <button type="text" @click="cropperModal = false">取消</button>
        <button type="primary" @click="handleCropperPhoto">裁剪</button>
      </div>
    </Modal>
  </div>
</template>
```

这里简述一下 vue-cropper 中配置的是什么

<strong>img</strong>: 图源地址，也就是上传的图片，支持 url/base64/blob，这里遇到的第一个坑是 upload 组件返回的对象不能直接使用，我这里转成了 base64

<strong>autoCrop</strong>: 是否默认生成截图框，默认值为 false，所以需要自己设置

<strong>centerBox</strong>: 截图框是否被限制在图片里面，截图框的可移动区域仅仅是图片大小区域，不能移动到外面的 alpha 区域的意思

<strong>autoCropWidth/autoCropHeight</strong>: 截图框的宽高，默认的宽高是容器大小的 80%，太大了，所以自己设置了一下

```js
import { VueCropper } from "vue-cropper";
export default {
  name: "CropperComponent",
  components: { VueCropper },
  data() {
    return {
      cropperModal: false,
      userAvatar: "",
      cropperBase64: "",
    };
  },
  methods: {
    // 该方法 return false 阻止 Upload 组件自动上传并将 file 对象转成 base64 赋值给截图源
    handleUploadIntercept(file) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        this.cropperBase64 = reader.result;
        this.cropperModal = true;
      };
      return false;
    },

    // 获取 base64 截图数据并放置到 Avatar 组件
    handleCropperPhoto() {
      this.$refs.cropper.getCropData((data) => {
        this.userAvatar = data;
        this.cropperModal = false;
      });
    },
  },
};
```

基本上简单的截图功能就实现了，如果对截取后的图片有什么要求，可以深耕该工具的文档。
