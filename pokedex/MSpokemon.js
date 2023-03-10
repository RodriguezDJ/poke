
function loadPokemon(name) {

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => response.json())
      .then(data => {
        const image = document.getElementById('pokemon-image');
        image.src = data.sprites.front_default;
        
        const info = document.getElementById('pokemon-info');
        info.textContent = `Name: ${data.name}, Type: ${data.types[0].type.name}`;
      });
  }
  
  function addToFavorites() {
    const image = document.getElementById('pokemon-image').src;
    const info = document.getElementById('pokemon-info').textContent;
    
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.push({ image, info });
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
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
