<template></template>

<script lang="ts" setup>
const properties = defineProps({
  id: {},
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  species: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  }
})
</script>