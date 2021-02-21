<template>
  <div></div>
</template>
<script>
import { TorusGeometry, MeshBasicMaterial, Mesh } from 'three'

export default {
  props: {
    name: String,
    color: Number,
    wireframe: Boolean,
    radius: Number,
    tube: Number,
    radialSegments: Number,
    tubularSegments: Number,
    arc: Number
  },
  methods: {
    init ({
      color,
      wireframe,
      radius,
      tube,
      radialSegments,
      tubularSegments,
      arc,
      name
    }) {
      const geometry = new TorusGeometry(radius, tube, radialSegments, tubularSegments, arc)

      const material = new MeshBasicMaterial({
        color,
        wireframe
      })
      const torus = new Mesh(geometry, material)
      torus.name = name
      return torus
    }
  }
}
</script>
