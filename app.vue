<template>
  <div>
    <CharacterCard v-for="character in data.characters.results" :key="character.id" :id="character.id"
      :name="character.name" :image="character.image" :status="character.status" :species="character.species"
      :location="character.location.name" />
  </div>
</template>

<script lang="ts" setup>
type CharactersResults = {
  characters: {
    results: {
      id: string,
      name: string,
      image: string,
      status: string,
      species: string,
      location: {
        name: string
      }[]
    }
  }
}

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

const { data } = await useAsyncQuery<CharactersResults>(query)
</script>