import { addTask, deleteTask, showSection } from "../js/toDoscript.js";
import { getPokemonList, searchPokemon } from '../js/pokeApi.js';
/*
document.addEventListener('DOMContentLoaded', ()=> {
alert("✨ This experience is under wizard creation ✨\n\nFor the best magic, Please Rotate your phone ↻\nor open this on a desktop or laptop!")
});
*/


//esta funcion va a mostrar la seccion del proyecto seleccionado    
document.addEventListener('click', function(e) {
    // Si en donde se haga click su clase es la misma q .projectButton entonces ejecuta el eventlistener    
    if (e.target.matches('.projectButton')) { 
        showSection(e); 
    }
});

/* Este for each recore el NodeList y ejecuta el evento en el bton 
    const projectsButton = document.querySelectorAll(".projectButton");
    projectsButton.forEach(iterador => {
        console.log(iterador);
        iterador.addEventListener('click',showSection);
    });
*/


//From here this code works to Task List
const inputText = document.getElementById("textTaskId");
const buttonTask = document.getElementById("addTask");
const buttonDelete = document.getElementById("deleteTask");

buttonTask.addEventListener('click',()=>{
    addTask(inputText.value)
    inputText.value = "";
});

buttonDelete.addEventListener('click',deleteTask);

//Get a pokemon list code

const getPokemonListButton = document.querySelector('.getListButton');

/*
getPokemonListButton.addEventListener('click', function(){
    
    
    console.log("It works!");
    getPokemonList();
    
});*/


getPokemonListButton.addEventListener('click', getPokemonList);