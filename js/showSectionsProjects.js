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
export function showSection(e) {

    const buttonId = e.target.id;

    let showSectionProjects = "";
    switch (buttonId) {
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
