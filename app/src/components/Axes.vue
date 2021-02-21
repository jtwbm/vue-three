<template>
  <div></div>
</template>
<script>
import * as THREE from 'three'

export default {
  props: {
    size: Number,
  },
  methods: {
    init(config) {
      return new THREE.AxesHelper(config.size);
    },
  },
}
</script>