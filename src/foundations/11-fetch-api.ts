import type { GIFRandomResponse } from "./data/gif.response";

const API_KEY = `PCZtv1YLSLcldiMue7jeD3heqePjPH54`;

const request = fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

const createImage = (url: string) => {
    const img = document.createElement("img");
    img.src = url;
    document.body.appendChild(img);
}

request
    .then((response) => response.json())
    .then(({data}: GIFRandomResponse) => {

        const imgUrl = data.images.original.url;
        createImage(imgUrl);
    })
    .catch( (error) => {
    console.log(error);
    });