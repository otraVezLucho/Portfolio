const pokemonList = [];
let counter = 0;
let counter2 = 0;
export async function getPokemonList() {
    counter+=30;
    console.log(counter);

    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=40');

    if ( response === 404){
        alert("Unable to fetch the pokemon list")
    }else{

        //console.log(response);
        console.log();
        console.log();
        const data = await response.json();
       
        for(let i = 0; i < data.results.length; i++){
            counter2 = i+1;
            pokemonList.push(data.results[i].name);
            console.log(pokemonList[i]);
            
            createCard(pokemonList[i], await searchPokemon(data.results[i].name))
            //console.log(searchPokemon(data.results[i].name));
            
        }
        
    }
}
export async  function  searchPokemon(name) {
const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${name}`);

    if(response === 404){
        alert("Unable to fetch the pokemon")
    }else{
        const data = await response.json();
        return data.sprites.front_default; 
    }
    
}

function createCard(name, img){

    
    //Card 
    const pokeCard = document.createElement('div');
    pokeCard.classList.add('pokeCard');
    pokeCard.id ='pokeCardId'+counter2;

    //TITLE CARD
    const titleCard = document.createElement('p');
    titleCard.classList.add('titleCard')
    titleCard.innerText = name;

    //Image
    const pokeImg = document.createElement('img');
    pokeImg.id = "imgCard";
    pokeImg.src = img;

    //Adding title and img to the card
    pokeCard.append(titleCard, pokeImg);

    //add to the container 
    const containerList = document.querySelector('.listContent');
    containerList.append(pokeCard);
}