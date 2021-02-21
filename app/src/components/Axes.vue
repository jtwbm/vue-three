<template>
  <div></div>
</template>
<script>
import { AxesHelper } from 'three'

export default {
  props: {
    size: Number
  },
  methods: {
    init (config) {
      return new AxesHelper(config.size)
    }
  }
}
</script>
