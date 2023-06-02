<template>
    <h2>{{customTitle}}</h2>
    <!--<p>{{ counter }} <sup>2</sup> = {{ counter * counter }}</p>-->
    <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
    <div>
        <button v-on:click="increase">+</button>
        <button @click="decrease">-</button>
    </div>
</template>

<script>
    export default {
        //props: ['title', 'start'],
        props: {
            title: String,
            start: {
                type: Number,
                required: true,
                default: 100,
                validator(value){
                    return value >= 0
                }
            }
        },
        data(){
            return{
                counter: this.start
            }
        },
        methods: {
            getSquareValue(){
                console.log('getSquareValue');
                return this.counter * this.counter
            },
            increase(){
                return this.counter++
            },
            decrease(){
                return this.counter--
            }
        },
        computed: {
            squareCounter(){
                return this.counter * this.counter
            },
            customTitle(){
                return this.title ? this.title : 'Counter'
            }
        }
    };
</script>

<style>
    button{
        background-color: #2fd780;
        border-radius: 3px;
        border: 1px solid whitesmoke;
        color: white;
        cursor: pointer;
        margin: 0 5px;
        padding: 5px 15px;
        transition: 0.3s ease-in-out;
    }
    button:hover{
        background-color: #029047;
        transition: 0.3s ease-in-out;
    }
</style>
