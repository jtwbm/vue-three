<template>
  <div></div>
</template>
<script>
import { CircleGeometry } from 'three'
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
      default: 3
    },
    segments: {
      type: Number,
      default: 15
    },
    thetaStart: {
      type: Number,
      default: 0
    },
    thetaLength: {
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
      return new CircleGeometry(
        this.radius,
        this.segments,
        this.thetaStart,
        this.thetaLength
      )
    }
  }
}
</script>
