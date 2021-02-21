<template>
  <div></div>
</template>
<script>
import { CylinderGeometry, MeshBasicMaterial, Mesh } from 'three'

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
      radiusTop,
      radiusBottom,
      height,
      radialSegments,
      heightSegments,
      openEnded,
      thetaStart,
      thetaLength
    }) {
      const geometry = new CylinderGeometry(
        radiusTop,
        radiusBottom,
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
