import { MeshBasicMaterial, Mesh } from 'three'

export default {
  methods: {
    createMaterial () {
      return new MeshBasicMaterial({
        color: this.color,
        wireframe: this.wireframe
      })
    },
    createMesh (geometry, material) {
      return new Mesh(geometry, material)
    },
    setPosition () {
      this.item.position.x = this.position.x
      this.item.position.y = this.position.y
      this.item.position.z = this.position.z
    },
    setRotation () {
      this.item.rotation.x = this.rotation.x
      this.item.rotation.y = this.rotation.y
      this.item.rotation.z = this.rotation.z
    },
    init () {
      const geometry = this.createGeometry()
      const material = this.createMaterial()
      const result = this.createMesh(geometry, material)
      result.name = this.name
      this.item = result

      this.setPosition()
      this.setRotation()
      setTimeout(() => {
        this.$parent.addGeometryToScene(this.item)
      }, 100)
      this.$emit('init')
    }
  },
  watch: {
    color (val) {
      this.item.material.color.setHex(val)
    },
    position: {
      deep: true,
      handler () {
        this.setPosition()
      }
    },
    rotation: {
      deep: true,
      handler () {
        this.setRotation()
      }
    }
  },
  mounted () {
    this.init()
  }
}
