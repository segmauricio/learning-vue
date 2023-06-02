const apiKEY = 'M0O5AETirpvDs4KcuMiLr1hsQFEQ5eN5'

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKEY}`)
    .then(res => res.json() )
    .then(({data}) => {
        const {url} = data.images.original

        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    })
    .catch(err => {
        console.log(err);
    })