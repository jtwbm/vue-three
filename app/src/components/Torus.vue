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
  },
  methods: {
    init(config) {
      const geometry = new TorusGeometry(1,.4,10,20,2 * Math.PI);
      const material = new MeshBasicMaterial({
        color: config.color,
        wireframe: config.wireframe,
      });
      const torus = new Mesh(geometry, material);
      torus.name = config.name;
      return torus;
    },
  },
}
</script>