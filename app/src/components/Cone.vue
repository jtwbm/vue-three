<template>
  <div></div>
</template>
<script>
import { ConeGeometry } from 'three'
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
      default: 1
    },
    height: {
      type: Number,
      default: 3
    },
    radialSegments: {
      type: Number,
      default: 5
    },
    heightSegments: {
      type: Number,
      default: 10
    },
    thetaStart: {
      type: Number,
      default: 0
    },
    thetaLength: {
      type: Number,
      default: 2 * Math.PI
    },
    openEnded: {
      type: Boolean,
      default: false
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
      return new ConeGeometry(
        this.radius,
        this.height,
        this.radialSegments,
        this.heightSegments,
        this.openEnded,
        this.thetaStart,
        this.thetaLength
      )
    }
  }
}
</script>
