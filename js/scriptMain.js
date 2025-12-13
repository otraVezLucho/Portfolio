import {addTask,deleteTask} from "../js/toDoscript.js";


document.addEventListener('DOMContentLoaded', ()=> {
alert("✨ This experience is under wizard creation ✨\n\nFor the best magic, please open this on a desktop or laptop!")
});



//From here this code works to Task List
const inputText = document.getElementById("textTaskId");
const buttonTask = document.getElementById("addTask");
const buttonDelete = document.getElementById("deleteTask");

buttonTask.addEventListener('click',()=>{
    addTask(inputText.value)
    inputText.value = "";
});

buttonDelete.addEventListener('click',deleteTask);


