let pokemonList = [];
let counter = 0;
let counter2 = 0;



//url goes out the function to avoid a reset
let nextUrl = 'https://pokeapi.co/api/v2/pokemon?limit=40';
let getListContent = document.querySelector('.listContent');
const getListContainer = document.querySelector('.listContainer');

const getListButton = document.querySelector('.getListButton');

export async function getPokemonList() {
    
    getListButton.textContent = "Get More";

    counter++;
    
    console.log(counter);

    if (!nextUrl) return; // si no hay mas paginas, no hace nada y sale

    const response = await fetch(nextUrl);
    const data = await response.json();
    nextUrl = data.next; //Aca guardo la siguiente pagina para el proximo click

    for (let i = 0; i < data.results.length; i++) {
        const currentName = data.results[i].name;

        counter2++;
        pokemonList.push(currentName);
        ;
        //add to the container 
        const containerList = document.querySelector('.listContent');
        containerList.append(createCard(currentName, await searchPokemon(currentName)));
    }
    
}

export async  function  searchPokemon(name) {
const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${name}`);
    let pokemonName = 'None';
    if(!response.ok){
        alert("Unable to fetch the pokemon")
        return;
    }else{
        const data = await response.json();
        return data.sprites?.front_default;
    }
    
    
}

export function createCard(name, img){

    
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

    
    //container
    const containerButtonsCard = document.createElement('div');
    containerButtonsCard.classList.add('cardButtonSection');

    //card buttons
    const favoriteButton = document.createElement('i');
    favoriteButton.classList.add('bx');
    favoriteButton.classList.add('bxs-star');
    favoriteButton.id = 'favoriteButton';
    favoriteButton.addEventListener('click', addToFavorite);

    
    const deleteButton = document.createElement('i');
    deleteButton.style.display= 'none';
    deleteButton.classList.add('bx');
    deleteButton.classList.add('bxs-trash-alt');
    deleteButton.id = 'deleteButton';
    

    

    containerButtonsCard.append(favoriteButton,deleteButton);

    //Adding all components to the card
    pokeCard.append(titleCard, pokeImg, containerButtonsCard);

    return pokeCard;
}
const unitSearchContentSection = document.querySelector('.unitSearchContentNone');

export async function searchUnitPokemon(name){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if(!response.ok){
        alert("Invalid Pokemon Name");
        return;
    }else{

        const data = await response.json();
        console.log(data.name);
        
        console.log('Pokemon found');

        unitSearchContentSection.innerHTML="";
        unitSearchContentSection.classList.add('unitSearchContent');
        unitSearchContentSection.append(createCard(data.name, data.sprites.front_default));        
    }

}

export function cleanSections(){
    //The search one pokemon will be cleaned 
    unitSearchContentSection.innerHTML = "";
    //The list of pokecards will be cleaned as well
    getListContent.innerHTML = "";
    //Tengo que reiniciar la URL 
    nextUrl = 'https://pokeapi.co/api/v2/pokemon?limit=40';
    getListButton.textContent = "Check all pokemon";
}


const favoriteContainer = document.querySelector('.favoritesSectionNone');
const favoriteCardContainer = document.querySelector('.favoriteCardContainer');
let totalCards = favoriteCardContainer.querySelectorAll('.pokeCard');
console.log("total pokemon cards in the favorite container: ", totalCards.length );


export function addToFavorite(e){
    favoriteContainer.classList.remove('favoritesSectionNone');
    favoriteContainer.classList.add('favoritesSection');
    let cardToSend = e.target.parentNode.parentNode;

    //Show delete button
    cardToSend.querySelector('.bxs-trash-alt').style.display='inline-block';
    //Hide star button
    cardToSend.querySelector('.bxs-star').style.display = 'none';
    // Delete button can be only showed in favorites section
    
    const deleteButton = cardToSend.querySelector('.bxs-trash-alt'); //document.getElementById('deleteButton');
    
   
    const containerButtonsCard = cardToSend.querySelector('.cardButtonSection');
    totalCards = favoriteCardContainer.querySelectorAll('.pokeCard');
    console.log("total pokemon cards in the favorite container: ", totalCards.length+1);
    
    deleteButton.addEventListener('click', deleteCard);
    favoriteCardContainer.append(cardToSend);
    console.log("Se Ejecuto todo");
    
}


function deleteCard (e){
    let cardToDelete = e.target.parentNode.parentNode;
    cardToDelete.remove();
    if (favoriteCardContainer.querySelectorAll('.pokeCard').length === 0) {
        favoriteContainer.classList.remove('favoritesSection');
        favoriteContainer.classList.add('favoritesSectionNone');
    }
}


const buttonClearAllF = document.querySelector('.clearAllButtonFavorite');
buttonClearAllF.addEventListener('click', clearAllFavorites)


function clearAllFavorites(){
        const favoriteCardContainer = document.querySelector('.favoriteCardContainer');
        favoriteCardContainer.innerHTML = "";
        favoriteContainer.classList.remove('favoritesSection');
        favoriteContainer.classList.add('favoritesSectionNone');
    

}