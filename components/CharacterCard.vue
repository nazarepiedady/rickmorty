<template>
  <article class="flex flex-wrap gap-y-1 basis-1/3">
    <NuxtImg :src="image" />
    <div class="text-xl sm:mt-4">
      <h2>Name: {{ name }}</h2>
      <p>Status: {{ status }}</p>
      <p>Species: {{ species }}</p>
      <p>Location: {{ location }}</p>
    </div>
  </article>
</template>

<script lang="ts" setup>
const props = defineProps({
  id: {
    type: String,
    required: true
  },
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