// Load the selected pokemon
function loadPokemon(name) {
    // Make an API call to get information about the pokemon
    // Replace this with your own API call
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => response.json())
      .then(data => {
        // Update the UI with the pokemon's information
        const image = document.getElementById('pokemon-image');
        image.src = data.sprites.front_default;
        
        const info = document.getElementById('pokemon-info');
        info.textContent = `Name: ${data.name}, Type: ${data.types[0].type.name}`;
      });
  }
  
  // Add the selected pokemon to favorites
  function addToFavorites() {
    // Get the selected pokemon's information
    const image = document.getElementById('pokemon-image').src;
    const info = document.getElementById('pokemon-info').textContent;
    
    // Add the pokemon's information to the favorites list in local storage
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.push({ image, info });
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    // Update the UI with the new favorites list
    const favoritesList = document.getElementById('favorites-list');
    favoritesList.innerHTML = '';
    favorites.forEach(pokemon => {
      const li = document.createElement('li');
      const img = document.createElement('img');
      img.src = pokemon.image;
      li.appendChild(img);
      li.appendChild(document.createTextNode(pokemon.info));
      favoritesList.appendChild(li);
    });
  }
  
  // Load the favorites list from local storage on page load
  window.addEventListener('load', () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const favoritesList = document.getElementById('favorites-list');
    favoritesList.innerHTML = '';
    favorites.forEach(pokemon => {
      const li = document.createElement('li');
      const img = document.createElement('img');
      img.src = pokemon.image;
      li.appendChild(img);
      li.appendChild(document.createTextNode(pokemon.info));
      favoritesList.appendChild(li);
    });
  });

  class Pokemon{
    constructor(quien, tipo, ataque){
      this.quien = quien
      this.tipo = tipo
      this.ataque =ataque 
    }
    nombrarPokemon(){
    return 'Pokemon ${this.quien} de tipo ${this.tipo}';
  }
    }
  console.log(Pokemon);