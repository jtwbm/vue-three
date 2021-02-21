<template>
  <div></div>
</template>
<script>
import { ConeGeometry, MeshBasicMaterial, Mesh } from 'three'

export default {
  props: {
    color: Number,
    name: String,
    wireframe: Boolean
  },
  methods: {
    init ({
      name,
      color,
      wireframe,
      radius,
      height,
      radialSegments,
      heightSegments,
      openEnded,
      thetaStart,
      thetaLength
    }) {
      const geometry = new ConeGeometry(
        radius,
        height,
        radialSegments,
        heightSegments,
        openEnded,
        thetaStart,
        thetaLength,
        color
      )
      const material = new MeshBasicMaterial({
        color,
        wireframe
      })
      const cone = new Mesh(geometry, material)
      cone.name = name
      return cone
    }
  }
}
</script>
