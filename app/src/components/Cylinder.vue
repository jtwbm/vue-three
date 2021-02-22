<template>
  <div></div>
</template>
<script>
import { CylinderGeometry } from 'three'
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
    height: {
      type: Number,
      default: 3
    },
    thetaStart: {
      type: Number,
      default: 0
    },
    thetaLength: {
      type: Number,
      default: 2 * Math.PI
    },
    radialSegments: {
      type: Number,
      default: 15
    },
    heightSegments: {
      type: Number,
      default: 10
    },
    openEnded: {
      type: Boolean,
      default: false
    },
    radiusTop: {
      type: Number,
      default: 1
    },
    radiusBottom: {
      type: Number,
      default: 2
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
      return new CylinderGeometry(
        this.radiusTop,
        this.radiusBottom,
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
