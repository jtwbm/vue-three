<template>
  <div></div>
</template>
<script>
import { CircleGeometry, MeshBasicMaterial, Mesh } from 'three'

export default {
  props: {
    name: String,
    color: Number,
    radius: Number,
    segments: Number,
    thetaStart: Number,
    thetaLength: Number,
    wireframe: Boolean
  },
  methods: {
    init ({
      name,
      color,
      radius,
      segments,
      thetaStart,
      thetaLength,
      wireframe
    }) {
      const geometry = new CircleGeometry(radius, segments, thetaStart, thetaLength)
      const material = new MeshBasicMaterial({ color, wireframe })
      const circle = new Mesh(geometry, material)

      circle.name = name
      return circle
    }
  }
}
</script>
