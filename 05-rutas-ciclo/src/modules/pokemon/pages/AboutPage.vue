<template lang="">
    <div>
        <h1>About Page</h1>
        <hr>
        <h2>{{ name }}</h2>
        <button @click="onChangeName">
            Cambiar nombre
        </button>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                name: 'Fernando'
            }
        },
        methods: {
            onChangeName(){
                console.log('Se cambiara el nombre a Melissa');
                this.name = 'Melissa'
            }
        },
        beforeCreate(){
            console.log('beforeCreate');
        },
        created(){
            this.name = 'Juan Carlos'
            console.log('created');
        },
        beforeMount(){
            console.log('beforeMount');
        },
        mounted() {
            console.log('mounted');
        },
        beforeUpdate(){
            console.log('beforeUpdate');
        },
        updated() {
            console.log('updated');
        },
        activated() {
            console.log('activated');
        },
        deactivated() {
            console.log('deactivated');
        },
        unmounted() {
            console.log('unmounted');
        },
        errorCaptured: (err, vm, info) => {
            console.log('errorCaptured');
        },
        renderTracked(){
            console.log('renderTracked');
        },
        RenderTriggered(){
            console.log('renderTriggered');
        },
    }
</script>