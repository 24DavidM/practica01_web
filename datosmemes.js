const Obtenermemes = async() =>{
    const request = await fetch("https://api.imgflip.com/get_memes")
    const response = await request.json()
    console.log(response)

    const memesContainer = document.getElementById("list-memes")
    const memeTemplate = document.getElementById("meme")
    
    response.data.memes.slice(0,4).forEach(meme => {
        const newMemeCard = memeTemplate.cloneNode(true)
        const img = newMemeCard.querySelector("img")
        img.src = meme.url
        memesContainer.appendChild(newMemeCard)
    })

    memeTemplate.remove()

}
Obtenermemes()




const ObtenerGIFTS = async() => {

    const request = await fetch("https://api.giphy.com/v1/gifs/search?api_key=lerx9FDWD5PH78M207Cj95ac4KTt8G3v&q=siuuuu&limit=8")

    const response = await request.json();

    
    const memesContainerSiuu = document.getElementById("memeslista")
    const memeTemplateSiuu = document.getElementById("memardo")
    
    response.data.forEach(datos => {
        const nuevoMemes = memeTemplateSiuu.cloneNode(true)
        const image = nuevoMemes.querySelector("img")
        image.src = datos.images.original.url
        memesContainerSiuu.appendChild(nuevoMemes)
    });

    memeTemplateSiuu.remove();

    // console.log(response.data[0].images.original.url)
    // const contenedorGIFT = document.getElementById("memardo")
    // contenedorGIFT.src = response.data[0].images.original.url

    
}
ObtenerGIFTS();