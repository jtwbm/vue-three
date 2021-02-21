<template>
  <ThreeComponent :scene="scene" :camera="camera" id="scene">
    <Axes name="axes" :size="15" />
    <Dodecahedron v-bind="dodecahedronConfig" />
  </ThreeComponent>
</template>

<script>
import ThreeComponent from '@/components/Three.vue'
import Axes from '@/components/Axes.vue'
import Dodecahedron from '@/components/Dodecahedron.vue'

export default {
  name: 'App',
  components: {
    ThreeComponent,
    Axes,
    Dodecahedron
  },
  data () {
    return {
      scene: {
        background: 0x333333
      },
      camera: {
        fov: 90,
        position: {
          x: 1,
          y: 1,
          z: 7
        }
      },
      torusConfig: {
        name: 'donut',
        wireframe: true,
        color: 0xff0000,
        radius: 1,
        tube: 0.4,
        radialSegments: 10,
        tubularSegments: 20,
        arc: 2 * Math.PI
      },
      boxConfig: {
        name: 'box',
        color: 0x666666,
        width: 1,
        height: 1,
        depth: 1,
        widthSegments: 5,
        heightSegments: 5,
        depthSegments: 5,
        wireframe: true
      },
      circleConfig: {
        name: 'circle',
        color: 0xffff00,
        radius: 5,
        segments: 45,
        thetaStart: 0,
        thetaLength: 2 * Math.PI,
        wireframe: true
      },
      coneConfig: {
        name: 'test',
        color: 0x345346,
        wireframe: true,
        radius: 1,
        height: 2,
        radialSegments: 10,
        heightSegments: 5,
        openEnded: true,
        thetaStart: 0,
        thetaLength: 2 * Math.PI
      },
      cylinderConfig: {
        name: 'test',
        color: 0xff0000,
        wireframe: true,
        radiusTop: 1,
        radiusBottom: 2,
        height: 5,
        radialSegments: 32,
        heightSegments: 10,
        openEnded: true,
        thetaStart: 0,
        thetaLength: 2 * Math.PI
      },
      dodecahedronConfig: {
        name: 'test',
        color: 0xffd00e,
        wireframe: true,
        radius: 2,
        detail: 1
      }
    }
  },
  methods: {
    boxCallback (data) {
      console.log(data)
    }
  }
}
</script>
<style lang="scss">
@import 'reset-css';

#scene {
  width: 100%;
  height: 100vh;
}
</style>
