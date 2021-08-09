const img = document.querySelector('img');
const searchBar = document.querySelector('#gif-search');
const container = document.querySelector('#container');
container.textContent = "Enter a search term to load a random GIF!";


function findRandomGif() {
    searchTerm = searchBar.value;
    const apiURL = `https://api.giphy.com/v1/gifs/translate?api_key=H4sgeNgqOP913zfO1B6kbYJvZTYxyyeS&s=${searchTerm}`;
    
    fetch(apiURL, {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            const imgURL = response.data.images.original.url;
            img.src = imgURL;
        });
}


   