<template>
  <div></div>
</template>
<script>
import { AxesHelper } from 'three'

export default {
  props: {
    size: {
      type: Number,
      default: 5
    },
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    init () {
      const axes = new AxesHelper(this.size)
      axes.name = this.name
      setTimeout(() => {
        this.$parent.addGeometryToScene(axes)
      }, 100)
      this.$emit('init')
    }
  },
  mounted () {
    this.init()
  }
}
</script>
