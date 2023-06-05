<template>
  <div>
    <h1 v-if="!pokemon">Wait for it...</h1>
    <div v-else>
      <h1>Who is this Pokemon?</h1>
      <PokemonImage :pokemonId="pokemon.id" :showPokemon="showPokemon" />
      <PokemonOptions :pokemons="pokemonArr" />
    </div>
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
      pokemonArr: [],
      pokemon: null,
      showPokemon: false
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()

      const randomInt = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemonArr[randomInt]
    }
  },
  mounted() {
    this.mixPokemonArray()
  }
}
</script>

<style></style>