<script setup lang="ts">
import Circle1 from './Circle1.vue';
import Circle2 from './Circle2.vue';
import Circle3 from './Circle3.vue';
import Circle4 from './Circle4.vue';
import Circle5 from './Circle5.vue';
</script>

<template>
  <div class="CharacterRing">
    <div class="CRingSection">
      <Circle1 class="spin" />
    </div>
    <div class="CRingSection">
      <Circle2 />
    </div>
    <div class="CRingSection">
      <Circle3 />
    </div>
    <div class="CRingSection">
      <Circle4 />
    </div>
    <div class="CRingSection">
      <Circle5 />
    </div>
  </div>
</template>

<style scoped>
.CharacterRing {
  overflow: hidden;
  width: 280px;
  height: 280px;

  .CRingSection {
    position: absolute;
    transform-origin: center;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
}

@media (min-width: 640px) {
  .CharacterRing {
    width: 420px;
    height: 420px;
  }
}

@media (min-width: 960px) {
  .CharacterRing {
    width: 675px;
    height: 675px;
  }
}
</style>
