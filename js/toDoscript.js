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







