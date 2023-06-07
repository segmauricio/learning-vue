<template>
    <div>
        <router-link :to="{ name: 'home' }">Pokemon List</router-link>
        <router-link :to="{ name: 'pokemon-id', params: { id: 85 } }">Pokemon by ID</router-link>
        <router-link :to="{ name: 'about' }">About</router-link>
    </div>
</template>

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