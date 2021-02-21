<template>
  <div></div>
</template>
<script>
import { DodecahedronGeometry, MeshBasicMaterial, Mesh } from 'three'

export default {
  props: {
    color: Number,
    name: String,
    wireframe: Boolean,
    radius: Number,
    detail: Number
  },
  methods: {
    init ({
      name,
      color,
      wireframe,
      radius,
      detail
    }) {
      const geometry = new DodecahedronGeometry(
        radius,
        detail,
        color
      )
      const material = new MeshBasicMaterial({
        color,
        wireframe
      })
      const dodecahedron = new Mesh(geometry, material)
      dodecahedron.name = name
      return dodecahedron
    }
  }
}
</script>
