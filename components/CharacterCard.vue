<template>
  <article>
    <NuxtImg :src="image" />
    <div class="text-xl">
      <h3>{{ name }}</h3>
      <p>{{ status }}</p>
      <p>{{ species }}</p>
      <p>{{ location }}</p>
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