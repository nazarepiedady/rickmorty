<template>
  <div>
    <CharacterCard v-for="character in data.characters.results" />
  </div>
</template>

<script lang="ts" setup>
const query = gql`
  query getCharacters {
    characters {
      results {
        id
        name
        image
        status
        species
        location {
          name
        }
      }
    }
  }
`

const { data } = await useAsyncQuery(query)
</script>