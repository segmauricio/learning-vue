//console.log(Vue);

const app = Vue.createApp({
  /*
    template: `
    <h1>Hola Mundo desde Vue</h1>
    <p>Desde app.js</p>
    <p>{{1+1}}</p>
    <p>{{!true ? 'Activo' : 'Inactivo' }}</p>
    `
    */
  data() {
    return {
      message: "Hola Mundo",
      quote: "Im Batman",
      author: "Bruce Wayne",
    };
  },
  methods: {
    changeQuote(event){
        console.log('Hola Mundo', event);
        this.author = "Mauricio Segovia"
        this.capitalize()
    },
    capitalize(){
        this.quote = this.quote.toUpperCase()
    }
  },
});

app.mount("#myApp");
