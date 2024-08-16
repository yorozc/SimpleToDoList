/*show a button that allows user to add a todolist
once pressed, have the background fade out and a new page 
pop out that allows the user to insert a title and
a task
Once reached the end of the container, have the cards flow
downwards
After this is completed, have a history page for deleted,
and incomplete tasks
- with the history, have a dropdown that shows all, incomplete, deleted
Maybe create a priority tag for tasks as well
*/

const tasks = [];

const addTask = document.getElementById("task-button");
const taskCardPopup = document.querySelector(".task-card-popup")
const taskContainer = document.getElementById("task-container");
const taskCardInput = document.querySelector(".task-card-input");
const saveTask = document.querySelector(".create-task");

function showTasks(){
    taskContainer.innerHTML = '';
    tasks.forEach(task =>{
        const taskCard = document.createElement("div");
        taskCard.classList.add("task-card");

        //add the text elements into the task card
        const titleTaskCard = document.createElement("h1");
        titleTaskCard.textContent = task.title;

        const contentTaskCard = document.createElement("p");
        contentTaskCard.textContent = task.content; 

        //append elements to the task card
        taskCard.appendChild(titleTaskCard);
        taskCard.appendChild(contentTaskCard);
        taskContainer.appendChild(taskCard);
    })
    

}

function createTask(title, content){
    return {
        title: title,
        content: content,
    };
}

addTask.addEventListener("click", ()=>{
    taskCardPopup.style.display = "flex";
});



saveTask.addEventListener("click", ()=>{
    
    //values from input field
    const title = document.querySelector(".task-card-title").value;
    const content = document.querySelector(".content-area").value;

    const newTask = createTask(title, content);
    tasks.push(newTask);
    showTasks();
    document.querySelector(".task-card-title").value = "";
    document.querySelector(".content-area").value = "";
    taskCardPopup.style.display = "none";
    
});

function clickOutside(event){
    if(!taskCardInput.contains(event.target) && !addTask.contains(event.target)){
        taskCardPopup.style.display = "none";
    }
}

document.addEventListener("click", clickOutside);


//make delete all button
//make an edit button for the task cards
//make a save button for the cards





    

