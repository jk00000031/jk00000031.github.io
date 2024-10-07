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
      <path d="M337.5,337.5 m-160,0 a160,160 0 1,1 320,0 a160,160 0 1,1 -320,0" id="circle5"></path>
    </defs>
    <text dy="70" textLength="1005" fill="white">
      <textPath textLength="1005" href="#circle5">
        <tspan>&lt;&gt;</tspan>
        &lt;/&gt;
        <tspan>&lt;&gt;</tspan>
        &lt;/&gt;
        <tspan>&lt;&gt;</tspan>
        &lt;/&gt;
        <tspan>&lt;&gt;</tspan>
        &lt;/&gt;
        <tspan>&lt;&gt;</tspan>
        &lt;/&gt;
        <tspan>&lt;&gt;</tspan>
        &lt;/&gt;
        <tspan>&lt;&gt;</tspan>
        &lt;/&gt;
        <tspan>&lt;&gt;</tspan>
        &lt;/&gt;
        <tspan>&lt;&gt;</tspan>
        &lt;/&gt;
        <tspan>&lt;&gt;</tspan>
        &lt;/&gt;
        <tspan>&lt;&gt;</tspan>
        &lt;/&gt;
        <tspan>&lt;&gt;</tspan>
        &lt;/&gt;
        <tspan>&lt;&gt;</tspan>
        &lt;/&gt;
        <tspan>&lt;&gt;</tspan>
        &lt;/&gt;
        <tspan>&lt;&gt;</tspan>
        &lt;/&gt;
        <tspan>&lt;&gt;</tspan>
        &lt;/&gt;
      </textPath>
    </text>
  </svg>
</template>

<style scoped>
.spin {
  animation: spin 10s linear infinite;
}

@keyframes spin {
  from {
    rotate: 0;
  }
  to {
    rotate: 360deg;
  }
}
</style>
