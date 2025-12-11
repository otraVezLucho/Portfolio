import {addTask,deleteTask} from "../js/toDoscript.js";

const inputText = document.getElementById("textTaskId");
const buttonTask = document.getElementById("addTask");
const buttonDelete = document.getElementById("deleteTask");

buttonTask.addEventListener('click',()=>{
    addTask(inputText.value)
    inputText.value = "";
});

buttonDelete.addEventListener('click',deleteTask);


