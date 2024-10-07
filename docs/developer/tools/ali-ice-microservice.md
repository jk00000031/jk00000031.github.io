# 阿里开源的微前端库真是太好用了！

近日，由于所接手开发的项目越来越多，很多业务组件重复使用，每建一个新项目就要从旧项目里面 Copy 一份业务组件到新项目上，还要对新项目进行 UI 库适配，这无疑是一件很烦人的事，为了减少自己的工作量，我想到了当初开发小程序时微信提供的分包模式。

经过一番搜索，找到了一个工具 `lerna`，由于它只能在一个 `git` 库里面，也不是很符合我的需求，因为项目都是比较复杂的，整体包比较大，放到一个 `git` 里面容易出问题。

后来又想到了微前端，前后试过 `qiankun` / `micro-app` / `wujie` / `ice-stark`，唯有这个 `ice-stark` 最合心意，因为使用太简单了，在不考虑布局影响下，安装库后，只需要做小小的修改就可以实现微前端服务。

以 Vue 3 + vite 的已有项目为例 （官方也有这个栗子）

## 安装

```base
npm i --save @ice/stark
```

## 主应用

::: code-group

```html [index.html]
<html lang="zh-CN">
  <head>
    ...
  </head>
  <body>
    <div id="app"></div>
    <!-- 这里多加一个子应用容器，ID 随便命名，实际上这个放在哪里都可以，最重要的是可以获取到 -->
    <div id="ice-micro-app"></div>
    <script src="..." type="module"></script>
  </body>
</html>
```

```vue [App.vue]
<template>
  <div>主应用 App.vue</div>
</template>
<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import start from '@ice/stark-app/lib/start';
import { registerMicroApps } from '@ice/stark-app/lib/apps';

/**
    这里需要关注的是：
    activePath 设置的路由在 src/router 中不需要设置，注册应用后 @ice/stark-app 会进行路由劫持和匹配
    entry 可以设置正在运行的项目地址或编译后的 dist/index.html 地址，总之是能够正常访问的地址就行
 */
type RegisterAppConfig = {
    name: string,
    activePath: string,
    title: string,
    loadScriptMode: string,
    entry: string,
    container: HTMLElement
}

const router = useRouter();
const container = document.getElementById('ice-micro-app') as HTMLElement;

registerMicroApps<RegisterAppConfig[]>([
    {
        name: 'ExampleApp',
        activePath: '/example',
        title: 'Example Child App',
        loadScriptMode: 'import',
        entry: 'http://localhost:3000/',
        container,
    }
]);

onMounted(() => {
    start({

        onLoadingApp: () => {},
        onFinishLoading: () => {},
        onRouteChange: (_, pathname) => router.push(pathname)
        onActiveApps: (moduleApps) => {}
    });
});
</script>
```

:::

## 子应用

```typescript
// main.ts
import { createApp, type App as Root } from 'vue';
import App from './App.vue';
// import ...
import isInIcestark from '@ice/stark-app/lib/isInIceStark';

let vue = Root<Element> | null = null;

const runApp = (container: Element | string) => {
  vue = createApp(App);
  // vue.use(...)
  vue.mount(container);
}

if (!isInIcestark()) runApp('#app');

// 这里的 container 就是主应用传入的容器
export function mount({ container }: { container: Element }) {
  runApp(container);
}

export function unmount() {
  if (vue) vue.unmount();
}
```

至此，一个简单的微前端应用就搞定了，但是目前两者都是单独运行的，也就是说除了浏览器提供的存储方式外，我们还需要应用之间能够通信，举一个简单的栗子：主应用有用户通知，进入消息子应用查看后需要刷新主应用的消息数量。

为此，`@ice` 还提供了一个 `@ice/stark-data` 实现应用间的通信，拥有 `store` 和 `event`, 具体的使用方式可以前往官网 [@ice/dark-data](https://micro-frontends.ice.work/docs/guide/advanced/communication/) 查看
