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

//will hold the tasks 
const tasks = [];
let editingTaskId = null;

const addTask = document.getElementById("task-button");
const taskCardPopup = document.getElementById("task-card-popup")
const taskContainer = document.getElementById("task-container");
const taskCardInput = document.querySelector(".task-card-input");
const saveTask = document.querySelector(".create-task");
const titleInput = document.querySelector(".task-card-title");
const contentInput = document.querySelector(".content-area");



function showTasks(){
    
    taskContainer.innerHTML = '';

    tasks.forEach(task =>{
        const taskCard = document.createElement("div");
        taskCard.classList.add("task-card");
        taskCard.id = task.id;
        
        //add the text elements into the task card
        const titleTaskCard = document.createElement("h1");
        titleTaskCard.id = "card-title";
        titleTaskCard.textContent = task.title;

        const contentTaskCard = document.createElement("p");
        contentTaskCard.textContent = task.content; 

        const taskBtns = document.createElement("div");
        taskBtns.classList.add("taskBtns");

        const editBtn = document.createElement("button");
        editBtn.setAttribute("type", "button");
        editBtn.classList.add("editBtn");
        editBtn.textContent = "Edit";
        editButton(editBtn, taskCard);

        const deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("type", "button");
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.textContent = "Delete";
        deleteButton(deleteBtn, taskCard); 
        

        const saveBtn = document.createElement("button");
        saveBtn.setAttribute("type", "button");
        saveBtn.textContent = "Save";

        taskBtns.appendChild(editBtn);
        taskBtns.appendChild(deleteBtn);
        taskBtns.appendChild(saveBtn);

        taskCard.appendChild(taskBtns);

        //append elements to the task card
        taskCard.appendChild(titleTaskCard);
        taskCard.appendChild(contentTaskCard);
        taskContainer.appendChild(taskCard);
    

        
    });
    

}

function createTask(title, content){
    return {
        id: Math.floor(Math.random() * Math.pow(10, 8).toString().padStart(8, '0')),
        title: title,
        content: content,
    };
}

addTask.addEventListener("click", ()=>{
    taskCardPopup.style.display = "flex";
    titleInput.value = "";
    contentInput.value = ""; 
    editingTaskId = null;
});



saveTask.addEventListener("click", ()=>{
    const title = titleInput.value;
    const content = contentInput.value;
    //values from input field
    if(editingTaskId){
        const task = tasks.find(task => task.id == editingTaskId);
        if(task){
            task.title = title;
            task.content = content;
        }else{
            console.log("Task is not found");
        }
        editingTaskId = null;
    }
    else{
        const newTask = createTask(title, content);
        tasks.push(newTask);
    }
    saveTask.textContent = "Create Task";
    showTasks();
    taskCardPopup.removeAttribute("style");
    
});

//deletes taskcard from container and task from the list of tasks
function deleteButton(deleteBtn, taskCard){
    deleteBtn.addEventListener("click", ()=>{
        
        const taskIndex = tasks.findIndex(task => task.id = taskCard.id)
        tasks.forEach(task => {
            if(task.id === taskCard.id){
                taskCard.remove();
                tasks.splice(taskIndex, 1);
            }else{
                console.log("Id not found!");
            }
        })
    })
}

function editButton(editBtn, taskCard){
    editBtn.addEventListener("click", ()=> {
        tasks.forEach(task =>{
            if(task.id == taskCard.id){
                titleInput.value = task.title;
                contentInput.value = task.content;
                editingTaskId = taskCard.id
                saveTask.textContent = "Finish Edit";
                taskCardPopup.style.display = "flex";
            }else{
                console.log("Id not found!");
            }
        })
        
        
        
    });
}
//when too much content is added to the task card, it doesn't overflow
//have a transition when user presses add task
//make an edit button for the task cards
//make a save button for the cards





    

