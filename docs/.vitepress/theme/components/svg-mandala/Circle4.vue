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
      <path d="M337.5,337.5 m-200,0 a200,200 0 1,1 400,0 a200,200 0 1,1 -400,0" id="circle4"></path>
    </defs>
    <text dy="70" textLength="1257" fill="white">
      <textPath textLength="1257" href="#circle4">
        &nbsp;&nbsp;&nbsp;../../ &nbsp;&nbsp;&nbsp;../../ &nbsp;&nbsp;&nbsp;../../ &nbsp;&nbsp;&nbsp;../../ &nbsp;&nbsp;&nbsp;../../
        &nbsp;&nbsp;&nbsp;../../ &nbsp;&nbsp;&nbsp;../../
      </textPath>
    </text>
  </svg>
</template>

<style scoped>
.spin {
  animation: spin 50s linear infinite;
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
