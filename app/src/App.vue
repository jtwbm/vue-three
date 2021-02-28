<template>
  <ThreeComponent
    :scene="scene"
    :camera="camera"
    :items="items"
    :axes="15"
  >
  </ThreeComponent>
</template>

<script>
import ThreeComponent from '@/components/Three.vue'

export default {
  name: 'App',
  components: {
    ThreeComponent
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
      items: [
        {
          id: 'box1',
          type: 'box',
          config: {
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
          update (figure) {
            const colorNumber = figure.material.color.getHex() + 1
            figure.rotation.y -= 0.01
            figure.rotation.z += 0.01
            figure.material.color.setHex(colorNumber)
          }
        },
        {
          id: 'box2',
          type: 'box',
          config: {
            color: 0xcccccc,
            width: 1,
            height: 1,
            depth: 1,
            widthSegments: 9,
            heightSegments: 1,
            depthSegments: 17,
            wireframe: true,
            position: {
              x: 1,
              y: 0,
              z: -2
            },
            rotation: {
              x: 1,
              y: 1,
              z: -2
            }
          }
        },
        {
          id: 'donut',
          type: 'torus',
          config: {
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
          }
        },
        {
          id: 'circle1',
          type: 'circle',
          config: {
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
          }
        },
        {
          id: 'cone1',
          type: 'cone',
          config: {
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
          update (figure) {
            figure.rotation.x -= 0.01
          }
        },
        {
          id: 'cylinder1',
          type: 'cylinder',
          config: {
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
          }
        },
        {
          id: 'dodecahedron1',
          type: 'dodecahedron',
          config: {
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
      ]
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
