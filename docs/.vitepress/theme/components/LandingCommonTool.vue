<script setup lang="ts">
interface ToolItem {
  label: string;
  icon?: string;
  href?: string;
  descript?: string;
}

const toolList: ToolItem[] = [
  {
    label: 'Vitepress',
    descript: '',
    href: 'https://vitepress.dev/zh',
  },
  {
    label: 'Vite',
    descript: 'The build tool for the web.',
    href: 'https://vite.dev',
  },
  {
    label: 'Vue',
    href: 'https://cn.vuejs.org/',
  },
  {
    label: 'TailwindCSS',
    href: 'https://www.tailwindcss.cn/',
  },
  {
    label: 'NaiveUI',
    href: 'https://www.naiveui.com/zh-CN/',
  },
  {
    label: 'VueUse',
    href: 'https://vueuse.org/',
  },
  {
    label: 'Pinia',
    href: 'https://pinia.vuejs.org/zh/',
  },
  {
    label: 'TypeScript',
    href: 'https://www.tslang.cn/',
  },
  {
    label: '微信小程序',
    href: 'https://developers.weixin.qq.com/miniprogram/dev/framework/',
  },
  {
    label: 'Visual Studio Code',
    href: 'https://code.visualstudio.com/',
  },
];
</script>

<template>
  <section class="container">
    <div class="lead">
      <h3 class="tile">常用工具</h3>
      <p>以下工具排名不分先后，都是记起来直接在后面追加</p>
    </div>
    <ul class="ToolList">
      <li v-for="(item, index) of toolList" :key="index">
        <div class="toolbox">
          <h4 class="tile">{{ item.label }}</h4>
          <div class="descript">
            <p>{{ item.descript }}</p>
          </div>
          <p>
            <a :href="item.href" target="_blank" class="visit">
              <span>去访问</span>
              ↗
            </a>
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>
