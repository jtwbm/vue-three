<template>
  <ThreeComponent
    :scene="scene"
    :camera="camera"
    id="scene"
    :items="items"
    :axes="10"
  >
  </ThreeComponent>
</template>

<script>
import * as THREE from 'three'
import ThreeComponent from '@/components/Three.vue'

const x = 0
const y = 0
const heartShape = new THREE.Shape()
heartShape.moveTo(x + 5, y + 5)
heartShape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y)
heartShape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7)
heartShape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19)
heartShape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7)
heartShape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y)
heartShape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5)

class CustomSinCurve extends THREE.Curve {
  constructor (scale = 1) {
    super()
    this.scale = scale
  }

  getPoint (t, optionalTarget = new THREE.Vector3()) {
    const tx = t * 3 - 1.5
    const ty = Math.sin(2 * Math.PI * t)
    const tz = 0

    return optionalTarget.set(tx, ty, tz).multiplyScalar(this.scale)
  }
}

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
          id: 'tube1',
          type: 'tube',
          config: {
            color: 0xc0a7db,
            wireframe: true,
            path: new CustomSinCurve(10),
            position: {
              x: 6,
              y: -4,
              z: -10
            },
            rotation: {
              x: 1,
              y: 7,
              z: -2
            }
          },
          update (figure) {
            figure.rotation.x += 0.01
          }
        },
        {
          id: 'torusKnot1',
          type: 'torusknot',
          config: {
            color: 0xf5b342,
            wireframe: true,
            position: {
              x: 6,
              y: -4,
              z: 0
            },
            rotation: {
              x: 1,
              y: 7,
              z: -2
            }
          },
          update (figure) {
            figure.rotation.x += 0.01
          }
        },
        {
          id: 'tetrahedron1',
          type: 'tetrahedron',
          config: {
            color: 0xf58442,
            wireframe: true,
            position: {
              x: -4,
              y: 7,
              z: 0
            },
            rotation: {
              x: 1,
              y: 7,
              z: -2
            }
          },
          update (figure) {
            figure.rotation.x += 0.01
          }
        },
        {
          id: 'sphere1',
          type: 'sphere',
          config: {
            color: 0xf54242,
            wireframe: true,
            radius: 5,
            position: {
              x: 0,
              y: 5,
              z: -15
            },
            rotation: {
              x: 1,
              y: 7,
              z: -2
            }
          },
          update (figure) {
            figure.rotation.x += 0.01
          }
        },
        {
          id: 'shape1',
          type: 'shape',
          config: {
            color: 0xff9ed5,
            wireframe: true,
            shapes: heartShape,
            position: {
              x: 5,
              y: 5,
              z: -15
            },
            rotation: {
              x: 1,
              y: 7,
              z: -2
            }
          },
          update (figure) {
            figure.rotation.x += 0.01
            figure.rotation.z -= 0.01
          }
        },
        {
          id: 'ring1',
          type: 'ring',
          config: {
            color: 0x6ffc03,
            wireframe: true,
            innerRadius: 1,
            outerRadius: 5,
            thetaSegments: 6,
            phiSegments: 9,
            position: {
              x: 5,
              y: 5,
              z: -1
            },
            rotation: {
              x: 1,
              y: 7,
              z: -2
            }
          },
          update (figure) {
            figure.rotation.x += 0.01
            figure.rotation.y -= 0.01
            figure.rotation.z -= 0.01
          }
        },
        {
          id: 'polyhedron1',
          type: 'polyhedron',
          config: {
            color: 0xeb34de,
            wireframe: true,
            vertices: [-1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1],
            indices: [2, 1, 0, 0, 3, 2, 0, 4, 7, 7, 3, 0, 0, 1, 5, 5, 4, 0, 1, 2, 6, 6, 5, 1, 2, 3, 7, 7, 6, 2, 4, 5, 6, 6, 7, 4],
            radius: 1,
            detail: 1,
            position: {
              x: 3,
              y: 3,
              z: 1
            },
            rotation: {
              x: 1,
              y: 7,
              z: -2
            }
          },
          update (figure) {
            figure.rotation.y += 0.01
            figure.rotation.x -= 0.01
          }
        },
        {
          id: 'plane1',
          type: 'plane',
          config: {
            color: 0xffffff,
            wireframe: true,
            width: 2,
            height: 3,
            widthSegments: 10,
            heightSegments: 10,
            position: {
              x: 0,
              y: 5,
              z: 1
            },
            rotation: {
              x: 1,
              y: 7,
              z: -2
            }
          },
          update (figure) {
            figure.rotation.y += 0.01
            figure.rotation.x -= 0.01
          }
        },
        {
          id: 'parametric1',
          type: 'parametric',
          config: {
            color: 0x70623f,
            wireframe: true,
            func: function (u, v, target) {
              u *= Math.PI
              v *= 2 * Math.PI

              u = u * 2
              var x, y, z
              if (u < Math.PI) {
                x = 3 * Math.cos(u) * (1 + Math.sin(u)) + (2 * (1 - Math.cos(u) / 2)) * Math.cos(u) * Math.cos(v)
                z = -8 * Math.sin(u) - 2 * (1 - Math.cos(u) / 2) * Math.sin(u) * Math.cos(v)
              } else {
                x = 3 * Math.cos(u) * (1 + Math.sin(u)) + (2 * (1 - Math.cos(u) / 2)) * Math.cos(v + Math.PI)
                z = -8 * Math.sin(u)
              }

              y = -2 * (1 - Math.cos(u) / 2) * Math.sin(v)

              target.set(x, y, z)
            },
            slices: 10,
            stacks: 10,
            position: {
              x: 0,
              y: 5,
              z: -2
            },
            rotation: {
              x: 1,
              y: 1,
              z: -2
            }
          },
          update (figure) {
            figure.rotation.y -= 0.01
            figure.rotation.z += 0.01
          }
        },
        {
          id: 'octahedron1',
          type: 'octahedron',
          config: {
            color: 0x70623f,
            wireframe: true,
            radius: 1,
            detaul: 1,
            position: {
              x: 0,
              y: 5,
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
          id: 'icosahedron1',
          type: 'icosahedron',
          config: {
            color: 0xff6234,
            wireframe: true,
            radius: 1,
            detaul: 1,
            position: {
              x: -5,
              y: 5,
              z: -2
            },
            rotation: {
              x: 1,
              y: 1,
              z: -2
            }
          },
          update (figure) {
            figure.rotation.y -= 0.01
            figure.rotation.z += 0.01
          }
        },
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
