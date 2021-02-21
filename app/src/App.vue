<template>
  <ThreeComponent :scene="scene">
    <Torus name="donut" :wireframe="true" :color="0xff0000" />
  </ThreeComponent>
</template>

<script>
import ThreeComponent from '@/components/Three.vue';
import Torus from '@/components/Torus.vue';

export default {
  name: 'App',
  components: {
    ThreeComponent,
    Torus,
  },
  data() {
    return {
      scene: {
        background: 0x333333,
      },
    };
  },
}
</script>
<style lang="scss">
@import 'reset-css';
</style>