import type { GIFRandomResponse } from "./data/gif.response";

const API_KEY = `PCZtv1YLSLcldiMue7jeD3heqePjPH54`;



const createImage = (url: string) => {
    const img = document.createElement("img");
    img.src = url;
    document.body.appendChild(img);
}

const getGif = async (): Promise<string> => {

    const result = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    );

    const { data }: GIFRandomResponse = await result.json();

    return data.images.original.url;
};

getGif().then(createImage);