<template>
    <div>
        <!--
        <router-link :to="{ name: 'home' }">Pokemon List</router-link>
        <router-link :to="{ name: 'pokemon-id', params: { id: 85 } }">Pokemon by ID</router-link>
        <router-link :to="{ name: 'about' }">About</router-link>
        -->
        <CustomLink 
            v-for="link in links"
            :key="link.to"
            :link="link"/>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    data(){
        return {
            links: [
                { to: '/home', name:'Pokemons' },
                { to: '/pokemon-id/50', name:'By ID' },
                { to: '/about', name:'About' },
                { to: 'https://google.com', name:'Google' },
            ]
        }
    },
    components: {
        CustomLink: defineAsyncComponent( () => import('./CustomLink.vue'))
    }
}
</script>

<style scoped>
    div{
        padding: 0 30px;
    }
    div a{
        font-weight: bold;
        color: #044b5b;
        margin: 0 10px;
    }
    div .router-link-exact-active{
        color: #42bb98;

    }
</style>