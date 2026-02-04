let pokemonList = [];
let counter = 0;
let counter2 = 0;
let iteradorBucles = 0;


//url goes out the function to avoid a reset
let nextUrl = 'https://pokeapi.co/api/v2/pokemon?limit=40';

export async function getPokemonList() {
    const getListContainer = document.querySelector('.listContainer');
    let getListContent = document.querySelector('.listContent');
    const getListButton = document.querySelector('.getListButton');
    getListButton.textContent = "Get More";
    const clearButton = document.createElement('button');
    clearButton.classList.add('clearButton');
    clearButton.type= "button";
    clearButton.textContent = "Clear All";

    //Clear container button code
    clearButton.addEventListener('click', ()=>{
        if (getListContent) {
            getListContent.innerHTML= '';
            pokemonList = [];
            getListContainer.removeChild(clearButton);
            counter = 0;
            counter2 =0;
            //Tengo que reiniciar la URL 
            nextUrl ='https://pokeapi.co/api/v2/pokemon?limit=40';
            getListButton.textContent = "Pokemon List";
        }
    });

    
    counter++;
    if (counter === 1) getListContainer.append(clearButton);
        
   
    console.log(counter);

    if (!nextUrl) return; // si no hay mas paginas, no hace nada y sale

    const response = await fetch(nextUrl);
    const data = await response.json();
    nextUrl = data.next; //Aca guardo la siguiente pagina para el proximo click

    for (let i = 0; i < data.results.length; i++) {
        const currentName = data.results[i].name;

        counter2++;
        pokemonList.push(currentName);
        createCard(currentName, await searchPokemon(currentName));
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