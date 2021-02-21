<template>
  <ThreeComponent :scene="scene" :camera="camera" id="scene">
    <Axes :size="15" />
    <Torus name="donut" :wireframe="true" :color="0xff0000" />
  </ThreeComponent>
</template>

<script>
import ThreeComponent from '@/components/Three.vue';
import Axes from '@/components/Axes.vue';
import Torus from '@/components/Torus.vue';

export default {
  name: 'App',
  components: {
    ThreeComponent,
    Axes,
    Torus,
  },
  data() {
    return {
      scene: {
        background: 0x333333,
      },
      camera: {
        fov: 90,
        position: {
          x: 1,
          y: 1,
          z: 7,
        },
      },
    };
  },
}
</script>
<style lang="scss">
@import 'reset-css';

#scene {
  width: 100%;
  height: 100vh;
}
</style>