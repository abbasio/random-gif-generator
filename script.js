const img = document.querySelector('img');
const searchBar = document.querySelector('#gif-search');
const button = document.querySelector('#button');

document.addEventListener("keyup", function(event){
    if (event.key === 'Enter') button.click();
});

async function findRandomGif() {
    searchTerm = searchBar.value;
    const apiURL = `https://api.giphy.com/v1/gifs/translate?api_key=H4sgeNgqOP913zfO1B6kbYJvZTYxyyeS&s=${searchTerm}`;
    

    const response = await fetch(apiURL, {mode: 'cors'});
    const imgData = await response.json();
    const imgURL = imgData.data.images.original.url;
    img.src = imgURL;
}

   