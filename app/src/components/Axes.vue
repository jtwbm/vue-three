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
    init ({ size, name }) {
      const axes = new AxesHelper(size)
      axes.name = name
      return axes
    }
  }
}
</script>
