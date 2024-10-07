<script setup lang="ts">
import { SvgMandala } from './svg-mandala';
</script>

<template>
  <div class="LandingPage">
    <div class="LPJumbotron">
      <h1>巩固知识，不管如何都要<br /><span>再学一次</span></h1>
      <p>啊哈哈哈，比较懒，内容长期不更新可能就是我忘了还有这么个网站</p>
      <p class="LPControls">
        <a href="/developer/" class="LPControl primary">
          <span>技术贴回顾</span>
        </a>
        <a href="/developer/" class="LPControl">
          <span>自研应用</span>
        </a>
      </p>
    </div>
    <SvgMandala class="mandala" />
  </div>
</template>
