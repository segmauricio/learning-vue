<template>
  <div>
    <h1>Who is this Pokemon?</h1>

    <PokemonImage :pokemonId="158" :showPokemon="true" />
    <PokemonOptions :pokemons="pokemonArr" />


  </div>
</template>

<script>
import PokemonImage from '@/components/PokemonImage.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import getPokemonOptions from '../helpers/getPokemonOptions'

//console.log(getPokemonOptions());

export default {
  name: 'App',
  components: {
    PokemonImage,
    PokemonOptions
  },
  data() {
    return {
      pokemonArr: []
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()
    }
  },
  mounted() {
    this.mixPokemonArray()
  }
}
</script>

<style></style>