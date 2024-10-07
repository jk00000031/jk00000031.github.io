<script setup lang="ts">
withDefaults(
  defineProps<
    Partial<{
      size: number;
    }>
  >(),
  {
    size: 675,
  }
);
</script>

<template>
  <svg width="100%" height="100%" viewBox="0 0 675 675" fill="none" xmlns="http://www.w3.org/2000/svg" class="origin-center spin">
    <defs>
      <path d="M337.5,337.5 m-240,0 a240,240 0 1,1 480,0 a240,240 0 1,1 -480,0" id="circle3"></path>
    </defs>
    <text dy="70" textLength="1507" fill="white">
      <textPath textLength="1507" href="#circle3">
        <tspan>{</tspan>
        {
        <tspan>{</tspan>
        {&nbsp;
        <tspan>}</tspan>
        }
        <tspan>}</tspan>
        }&nbsp;&nbsp;
        <tspan>{</tspan>
        {
        <tspan>{</tspan>
        {&nbsp;
        <tspan>}</tspan>
        }
        <tspan>}</tspan>
        }&nbsp;&nbsp;
        <tspan>{</tspan>
        {
        <tspan>{</tspan>
        {&nbsp;
        <tspan>}</tspan>
        }
        <tspan>}</tspan>
        }&nbsp;&nbsp;
        <tspan>{</tspan>
        {
        <tspan>{</tspan>
        {&nbsp;
        <tspan>}</tspan>
        }
        <tspan>}</tspan>
        }&nbsp;&nbsp;
        <tspan>{</tspan>
        {
        <tspan>{</tspan>
        {&nbsp;
        <tspan>}</tspan>
        }
        <tspan>}</tspan>
        }&nbsp;&nbsp;
        <tspan>{</tspan>
        {
        <tspan>{</tspan>
        {&nbsp;
        <tspan>}</tspan>
        }
        <tspan>}</tspan>
        }&nbsp;&nbsp;
      </textPath>
    </text>
  </svg>
</template>

<style scoped>
.spin {
  animation: spin 30s linear infinite;
}

@keyframes spin {
  from {
    rotate: 360deg;
  }
  to {
    rotate: 0;
  }
}
</style>
