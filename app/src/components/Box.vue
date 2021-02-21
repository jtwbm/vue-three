<template>
  <div></div>
</template>
<script>
import { BoxGeometry, MeshBasicMaterial, Mesh } from 'three'

export default {
  props: {
    width: Number,
    height: Number,
    depth: Number,
    widthSegments: Number,
    heightSegments: Number,
    depthSegments: Number,
    color: Number,
    name: String
  },
  methods: {
    init ({
      width,
      height,
      depth,
      widthSegments,
      heightSegments,
      depthSegments,
      color,
      name
    }) {
      const geometry = new BoxGeometry(
        width,
        height,
        depth,
        widthSegments,
        heightSegments,
        depthSegments,
        color
      )
      const material = new MeshBasicMaterial({ color })
      const box = new Mesh(geometry, material)
      box.name = name
      return box
    }
  }
}
</script>
