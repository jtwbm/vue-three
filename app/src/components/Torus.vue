<template>
  <div></div>
</template>
<script>
import { TorusGeometry } from 'three'
import mixins from '@/mixins/index.js'

export default {
  props: {
    color: {
      type: Number,
      default: 0xcccccc
    },
    name: {
      type: String,
      required: true
    },
    wireframe: {
      type: Boolean,
      default: false
    },
    radius: {
      type: Number,
      default: 2
    },
    tube: {
      type: Number,
      default: 1
    },
    radialSegments: {
      type: Number,
      default: 15
    },
    tubularSegments: {
      type: Number,
      default: 20
    },
    arc: {
      type: Number,
      default: 2 * Math.PI
    },
    position: {
      type: Object,
      default: function () {
        return {
          x: 0,
          y: 0,
          z: 0
        }
      }
    },
    rotation: {
      type: Object,
      default: function () {
        return {
          x: 0,
          y: 0,
          z: 0
        }
      }
    }
  },
  mixins: [mixins],
  methods: {
    createGeometry () {
      return new TorusGeometry(
        this.radius,
        this.tube,
        this.radialSegments,
        this.tubularSegments,
        this.arc
      )
    }
  }
}
</script>
