
/*
export function showSection(e){
    
    const buttonId = e.target.id;
    //Si el id del boton equivale a tasklist entonces active el container para que sea visible
    if(buttonId === "tasklist"){
        const showSectionProjects = document.getElementById("showTaskListSection");
        showSectionProjects.classList.toggle("projectsSectionActive");
        showSectionProjects.classList.toggle("projectsSectionNoActive");
    }
    //toDoContainer

}*/
export function showSection(e){
    
    const buttonId = e.target.id;
    
    let showSectionProjects = "";
    switch(buttonId){
        case "tasklist":
            showSectionProjects = document.getElementById("showTaskListSection");
            showSectionProjects.classList.toggle("projectsSectionActive");
            showSectionProjects.classList.toggle("projectsSectionNoActive");
        break;
        case "pokeApi":
            showSectionProjects = document.getElementById("showPokeApiSection");
            showSectionProjects.classList.toggle("projectsSectionActive");
            showSectionProjects.classList.toggle("projectsSectionNoActive");
        break;
        case "nasaApi":
            showSectionProjects = document.getElementById("showNasaApiSection");
            showSectionProjects.classList.toggle("projectsSectionActive");
            showSectionProjects.classList.toggle("projectsSectionNoActive");
        break;
        case "storeCatalog":
            showSectionProjects = document.getElementById("showStoreCatalogSection");
            showSectionProjects.classList.toggle("projectsSectionActive");
            showSectionProjects.classList.toggle("projectsSectionNoActive");
        break;
        case "navbars":
            showSectionProjects = document.getElementById("showNavBarsSection");
            showSectionProjects.classList.toggle("projectsSectionActive");
            showSectionProjects.classList.toggle("projectsSectionNoActive");
        break;
        case "cards":
            showSectionProjects = document.getElementById("showCardsSection");
            showSectionProjects.classList.toggle("projectsSectionActive");
            showSectionProjects.classList.toggle("projectsSectionNoActive");
        break;
        case "shoppingCarts":
            showSectionProjects = document.getElementById("showShoppingCartsSection");
            showSectionProjects.classList.toggle("projectsSectionActive");
            showSectionProjects.classList.toggle("projectsSectionNoActive");
        break;

    }
}


//From here this code works to Task List
let contador = 1;

export function addTask(inputText){
    if(inputText){
    //Primero asigno el id para que quede con el 1 y despues que incremente
     const idCheck = contador + "checkbox";
     contador++;
     console.log(inputText);
     const listaUl = document.getElementById("toDoList");
     const elementLi = document.createElement("li");
     const checkbox = document.createElement("input");
     const contentLabel = document.createElement("label");
     contentLabel.textContent = inputText;
     elementLi.classList.add("liListElement");
     //Agrego un ID unico al checkbox
     checkbox.id = idCheck;
     checkbox.type="checkbox";
     checkbox.classList.add("checkInput");
     contentLabel.classList.add("textLabel");
     //Para que el texto sea clickeable el for debe ser igual al id del input checkbox
     contentLabel.htmlFor = idCheck;
     //Agrego primero el checkbox al elemento tipo 'li' y luego el label
     elementLi.append(checkbox,contentLabel);
     //Por ultimo agrego el elemento li completo a la lista ul
     listaUl.appendChild(elementLi);
     
    }
    
}   

export function deleteTask(){

    const checkSelector = document.querySelectorAll("input[type='checkbox']:checked");
    //Esto devuelve un NodeList
    if(checkSelector.length === 0){
        alert("No items selected");
    }else{
        for(let i = 0; i < checkSelector.length;i++){
        console.log("Element id deleted: "+checkSelector[i].id);
        checkSelector[i].closest('li').remove();
        
        }
    }

    
    
    
}







