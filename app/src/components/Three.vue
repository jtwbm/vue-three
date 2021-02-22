<template>
  <div ref="canvas">
    <slot />
  </div>
</template>
<script>
import * as THREE from 'three'

export default {
  props: {
    scene: {
      type: Object,
      default: function () {
        return {
          background: 0xcccccc
        }
      }
    },
    camera: {
      type: Object,
      default: function () {
        return {
          fov: 75,
          position: {
            x: 1,
            y: 1,
            z: 5
          }
        }
      }
    }
  },
  data () {
    return {
      items: []
    }
  },
  computed: {
    cWidth () {
      return this.$refs.canvas.clientWidth
    },
    cHeight () {
      return this.$refs.canvas.clientHeight
    }
  },
  methods: {
    addGeometryToScene (item) {
      this.items.push(item)
      this.threeScene.add(item)
    },
    createScene () {
      this.threeScene = new THREE.Scene()
      this.threeScene.background = new THREE.Color(this.scene.background)
    },
    createCamera () {
      this._camera = new THREE.PerspectiveCamera(this.camera.fov, this.cWidth / this.cHeight, 1, 1000)
      this.initCameraPosition()
    },
    createRenderer () {
      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setSize(this.cWidth, this.cHeight)

      this.$refs.canvas.appendChild(this.renderer.domElement)
    },
    initCameraPosition () {
      this._camera.position.x = this.camera.position.x
      this._camera.position.y = this.camera.position.y
      this._camera.position.z = this.camera.position.z
    },
    init () {
      this.createScene()
      this.createCamera()
      this.createRenderer()
    },
    loop () {
      this.renderer.render(this.threeScene, this._camera)

      // *** добавить callback
      // if (this.items.test) {
      //   this.items.test.rotation.y -= 0.01
      //   this.items.test.rotation.z += 0.01
      //   this.items.test.rotation.x += 0.01
      // }
      requestAnimationFrame(this.loop)
      this.$emit('update')
    }
  },
  watch: {
    'camera.position': {
      deep: true,
      handler () {
        this.initCameraPosition()
      }
    }
  },
  mounted () {
    this.init()
    this.loop()
  }
}
</script>
