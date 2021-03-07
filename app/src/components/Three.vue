<template>
  <div ref="canvas">
    <slot></slot>
  </div>
</template>
<script>
import * as THREE from 'three'
import { useAxes } from '@/use/axes.js'

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
    items: Array,
    axes: Number
  },
  setup (props) {
    const figures = []
    props.items.forEach((item) => {
      figures.push(item)
    })

    if (props.axes) {
      const { axes } = useAxes(props.axes)
      figures.push(axes)
    }

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
        this.threeScene.add(figure.create())
      })
    },
    loop () {
      this.renderer.render(this.threeScene, this._camera)
      requestAnimationFrame(this.loop)
      this.items.forEach((figure) => {
        figure.update()
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
