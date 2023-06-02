import axios from 'axios'
const apiKEY = 'M0O5AETirpvDs4KcuMiLr1hsQFEQ5eN5'
//https://api.giphy.com/v1/gifs/random?api_key=${apiKEY}

export const giphyAPI = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKEY 
    }
})

/*
giphyAPI.get('/random')
    .then(res => {
        const {data} = res.data
        console.log(data)
        const {url} = data.images.original
        console.log(url);
        /*
        const url = res.data.data.images.original.url
        */
       /*
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    })
*/