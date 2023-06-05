<template>
  <div>
    <h1 v-if="!pokemon">Wait for it...</h1>
    <div v-else>
      <h1>Who is this Pokemon?</h1>

      <PokemonImage :pokemonId="pokemon.id" :showPokemon="showPokemon" />
      <PokemonOptions :pokemons="pokemonArr" @selectionPokemon="checkAnswer" />

      <template v-if="showAnswer">
        <h2 class="fade-in">
          {{ message }}
        </h2>
        <button @click="newGame" v-if="showPokemon">New Game</button>
      </template>
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
      showPokemon: false,
      showAnswer: false,
      message: ''
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()
      const randomInt = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemonArr[randomInt]
    },
    checkAnswer(selectedId) {
     
      this.showAnswer = true

      if (selectedId === this.pokemon.id) {
        this.message = `You guessed ${this.pokemon.name} right!`
        this.showPokemon = true
      } else {
        this.message = 'Try again.'
      }
    },
    newGame(){
      this.showAnswer = false,
      this.showPokemon = false,
      this.pokemonArr = [],
      this.pokemon = null,
      this.mixPokemonArray()
    }
  },
  mounted() {
    this.mixPokemonArray()
  }
}
</script>

<style></style>