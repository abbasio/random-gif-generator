const img = document.querySelector('img');
const searchTerm = 'space';
const apiURL = `https://api.giphy.com/v1/gifs/translate?api_key=H4sgeNgqOP913zfO1B6kbYJvZTYxyyeS&s=${searchTerm}`;

fetch(apiURL, {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        const imgURL = response.data.images.original.url;
        img.src = imgURL;
    });

