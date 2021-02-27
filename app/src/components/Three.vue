<template>
  <div ref="canvas">
  </div>
</template>
<script>
import * as THREE from 'three'
import { useCreateFigure } from '@/use/createFigure.js'

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
    },
    items: Array
  },
  setup (props) {
    const figures = []
    props.items.forEach((item) => {
      const figure = useCreateFigure(item)
      figure.name = item.id
      figures.push(figure)
    })
    return { figures }
  },
  computed: {
    cWidth () {
      return this.$refs.canvas.clientWidth
    },
    cHeight () {
      return this.$refs.canvas.clientHeight
    },
    figureWithUpdateCallback () {
      return this.items.filter((item) => {
        return !!item.update
      }).map((item) => this.figures.find((figure) => figure.name === item.id))
    }
  },
  methods: {
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
      this.figures.forEach((figure) => {
        this.threeScene.add(figure)
      })
    },
    loop () {
      this.renderer.render(this.threeScene, this._camera)
      requestAnimationFrame(this.loop)
      this.figureWithUpdateCallback.forEach((figure) => {
        const figureCallback = this.items.find((item) => item.id === figure.name).update
        figureCallback(figure)
      })
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
