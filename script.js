const img = document.querySelector('img');
const searchTerm = 'cats';
const apiURL = `https://api.giphy.com/v1/gifs/translate?api_key=H4sgeNgqOP913zfO1B6kbYJvZTYxyyeS&s=${searchTerm}`;

fetch(apiURL, {mode: 'cors'})
    .then(function(response) {
        console.log(response.json());
    });