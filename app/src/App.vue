<template>
  <ThreeComponent
    :scene="scene"
    :camera="camera"
    id="scene"
    @update="update"
  >
    <Axes name="axes" :size="15" />
    <Dodecahedron v-bind="dodecahedronConfig" @init="initHandler" />
    <Box v-bind="boxConfig" />
    <Circle v-bind="circleConfig" />
    <Cone v-bind="coneConfig" />
    <Cylinder v-bind="cylinderConfig" />
    <Torus v-bind="torusConfig" />
  </ThreeComponent>
</template>

<script>
import ThreeComponent from '@/components/Three.vue'
import Axes from '@/components/Axes.vue'
import Dodecahedron from '@/components/Dodecahedron.vue'
import Box from '@/components/Box.vue'
import Circle from '@/components/Circle.vue'
import Cone from '@/components/Cone.vue'
import Cylinder from '@/components/Cylinder.vue'
import Torus from '@/components/Torus.vue'

export default {
  name: 'App',
  components: {
    ThreeComponent,
    Axes,
    Dodecahedron,
    Box,
    Circle,
    Cone,
    Cylinder,
    Torus
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
        color: 0xf1e545,
        position: {
          x: 3,
          y: -5,
          z: -5
        },
        rotation: {
          x: 1,
          y: 1,
          z: -2
        }
      },
      boxConfig: {
        name: 'box',
        color: 0x3634dd,
        width: 1,
        height: 1,
        depth: 1,
        widthSegments: 5,
        heightSegments: 5,
        depthSegments: 5,
        wireframe: true,
        position: {
          x: 5,
          y: 1,
          z: -2
        },
        rotation: {
          x: 1,
          y: 1,
          z: -2
        }
      },
      circleConfig: {
        name: 'circle',
        color: 0xfa5bce,
        radius: 5,
        segments: 45,
        wireframe: true,
        position: {
          x: -4,
          y: -1,
          z: -5
        },
        rotation: {
          x: 1,
          y: 0.4,
          z: 2
        }
      },
      coneConfig: {
        name: 'cone',
        color: 0x345346,
        wireframe: true,
        radius: 1,
        height: 2,
        radialSegments: 10,
        heightSegments: 5,
        openEnded: true,
        position: {
          x: 5,
          y: 5,
          z: 0
        },
        rotation: {
          x: 1,
          y: 1,
          z: -2
        }
      },
      cylinderConfig: {
        name: 'cylinder',
        color: 0xff0000,
        wireframe: true,
        radiusTop: 0.5,
        radiusBottom: 1.4,
        height: 3,
        radialSegments: 32,
        heightSegments: 10,
        openEnded: true,
        position: {
          x: -4,
          y: -1,
          z: 2
        },
        rotation: {
          x: 0,
          y: 0,
          z: 0
        }
      },
      dodecahedronConfig: {
        name: 'dodecahedron',
        color: 0xffd00e,
        wireframe: true,
        radius: 2,
        detail: 1,
        position: {
          x: 1,
          y: 1,
          z: -2
        },
        rotation: {
          x: 1,
          y: 1,
          z: -2
        }
      }
    }
  },
  methods: {
    initHandler () {
      // console.log('initHandler')
    },
    update () {
      // this.camera.position.x += 0.01
      // this.camera.position.y += 0.01
      // this.camera.position.z += 0.01

      this.dodecahedronConfig.color += 0x000001
      // this.dodecahedronConfig.position.y += 0.01
      this.dodecahedronConfig.rotation.z += 0.01
      this.boxConfig.rotation.y += 0.01
      this.circleConfig.rotation.z += 0.01
      this.coneConfig.rotation.x -= 0.01
      this.cylinderConfig.rotation.y -= 0.01
      this.torusConfig.rotation.y -= 0.01
      this.torusConfig.rotation.z += 0.01
      this.torusConfig.rotation.x -= 0.01
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
