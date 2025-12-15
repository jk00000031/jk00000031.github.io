<script setup lang="ts">
import { Cpu, Gpu, Brain, Flower } from "lucide-vue-next";
</script>

<template>
  <main>
    <section class="pt-24">
      <div class="w-(--ex-page-container) mx-auto relative">
        <h1 class="text-6xl! mb-16!">
          <strong class="text-transparent bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-8xl!">好奇心</strong>，<br />
          <span>是人类进步的动力。</span>
        </h1>
        <div>
          <p>想要继续进步，必须保持自身对外界事物的好奇心，在困惑中探索知识。</p>
          <p class="flex py-12 gap-x-6">
            <Cpu :size="28" />
            <Gpu :size="28" />
            <Brain :size="28" />
          </p>
        </div>
        <Flower :size="52" class="absolute right-0 mt-32 text-green-500 animate-spin" />
      </div>
    </section>
  </main>
</template>
