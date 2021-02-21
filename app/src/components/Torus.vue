<template>
  <div></div>
</template>
<script>
import * as THREE from 'three'

export default {
  props: {
    name: String,
    color: Number,
    wireframe: Boolean,
  },
  methods: {
    init(config) {
      const geometry = new THREE.TorusGeometry(1,.4,10,20,2 * Math.PI);
      const material = new THREE.MeshBasicMaterial({
        color: config.color,
        wireframe: config.wireframe,
      });
      const torus = new THREE.Mesh(geometry, material);
      torus.name = config.name;
      return torus;
    },
  },
}
</script>