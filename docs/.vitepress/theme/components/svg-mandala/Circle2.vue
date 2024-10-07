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
      <path d="M337.5,337.5 m-280,0 a280,280 0 1,1 560,0 a280,280 0 1,1 -560,0" id="circle2"></path>
    </defs>
    <text dy="70" textLength="1760" fill="white">
      <textPath textLength="1760" href="#circle2">
        &nbsp;&nbsp;+
        <tspan>+</tspan>
        +
        <tspan>+</tspan>
        +
        <tspan>+</tspan>
        &nbsp;&nbsp;+
        <tspan>+</tspan>
        +
        <tspan>+</tspan>
        +
        <tspan>+</tspan>
        &nbsp;&nbsp;+
        <tspan>+</tspan>
        +
        <tspan>+</tspan>
        +
        <tspan>+</tspan>
        &nbsp;&nbsp;+
        <tspan>+</tspan>
        +
        <tspan>+</tspan>
        +
        <tspan>+</tspan>
        &nbsp;&nbsp;+
        <tspan>+</tspan>
        +
        <tspan>+</tspan>
        +
        <tspan>+</tspan>
        &nbsp;&nbsp;+
        <tspan>+</tspan>
        +
        <tspan>+</tspan>
        +
        <tspan>+</tspan>
        &nbsp;&nbsp;+
        <tspan>+</tspan>
        +
        <tspan>+</tspan>
        +
        <tspan>+</tspan>
      </textPath>
    </text>
  </svg>
</template>

<style scoped>
.spin {
  animation: spin 40s linear infinite;
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
