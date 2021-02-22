<template>
  <div></div>
</template>
<script>
import { BoxGeometry } from 'three'
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
    width: {
      type: Number,
      default: 1
    },
    height: {
      type: Number,
      default: 1
    },
    depth: {
      type: Number,
      default: 1
    },
    widthSegments: {
      type: Number,
      default: 1
    },
    heightSegments: {
      type: Number,
      default: 1
    },
    depthSegments: {
      type: Number,
      default: 1
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
      return new BoxGeometry(
        this.width,
        this.height,
        this.depth,
        this.widthSegments,
        this.heightSegments,
        this.depthSegments
      )
    }
  }
}
</script>
