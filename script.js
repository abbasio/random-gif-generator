const img = document.querySelector('img');
const searchBar = document.querySelector('#gif-search');
const container = document.querySelector('#container');
container.textContent = "Enter a search term to load a random GIF!";


async function findRandomGif() {
    searchTerm = searchBar.value;
    const apiURL = `https://api.giphy.com/v1/gifs/translate?api_key=H4sgeNgqOP913zfO1B6kbYJvZTYxyyeS&s=${searchTerm}`;
    
    const response = await fetch(apiURL, {mode: 'cors'});
    const imgData = await response.json();
    const imgURL = imgData.data.images.original.url;
    img.src = imgURL;
}

// findRandomGif().catch(error => {
//     console.error(error);
// });

   