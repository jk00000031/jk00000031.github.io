<template>
  <main>
    <section class="max-w-[calc(var(--vp-layout-max-width)-64px)] mx-auto px-5">
      <div class="py-6 text-left md:text-center md:py-36">
        <h1 class="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-fuchsia-600">
          <span>记录问题答案，分享奇思妙想</span>
        </h1>
        <div class="py-5 space-y-1 text-sm md:py-8 text-zinc-600">
          <p>虽文笔一般，也要竭尽所能描述得通俗易懂。</p>
          <p>如果在阅读得过程中有什么不懂但又想知道得，可以发送邮件咨询。</p>
        </div>
      </div>
      <div class="-mt-6 md:-mt-40">
        <div class="max-w-5xl mx-auto space-y-2 text-left border rounded-lg">
          <div class="flex items-center justify-between px-3 py-2 border-b">
            <h3 class="text-sm">
              <span>邮件发送案例</span>
            </h3>
            <p class="h-full px-2 text-xs leading-normal text-blue-600 bg-blue-100 rounded-full">请按照格式发送，否则按照垃圾邮件处理。</p>
          </div>
          <div class="p-3 space-y-2 text-sm">
            <div class="flex">
              <p>访问链接：</p>
              <p>
                <a href="/developer/frontend/vue/vue-pwa.html#_1-安装-vite-pwa-插件" class="text-blue-600 underline">
                  [Link: https://sansplan.cn/developer/frontend/vue/vue-pwa.html#_1-安装-vite-pwa-插件]
                </a>
              </p>
            </div>
            <div class="flex">
              <p>问题来源：</p>
              <div>
                <img src="/landing-question-screenshot.png" alt="Question Screenshot" class="w-96" />
              </div>
            </div>
            <div class="flex">
              <p>问题描述：</p>
              <p>为什么 PWA 这里的图标是数组？为什么要用数组？</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
