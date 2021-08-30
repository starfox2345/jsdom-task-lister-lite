document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  const newTaskForm = document.getElementById("create-task-form")
  const newTaskDescription = document.getElementById("new-task-description")
  const newTaskPriority = document.getElementById("new-task-priority");


  const taskUl = document.getElementById("tasks")

  const renderApp = () => (taskUl.innerHTML = taskList.renderTasks());


  newTaskForm.addEventListener("submit", createNewTask)
});

const createNewTask = event => {
  event.preventDefault()

  const newTaskDescription = document.getElementById("new-task-description")
  const newTask = document.createElement("li")
  newTask.textContent = newTaskDescription.value

  appendNewTask(newTask)
  event.target.reset()
};


const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task)
};

taskUl.addEventListener("click", (event) => {
  if (event.target.nodeName === "BUTTON") {
    taskList.deleteTask(event.target.dataset.description);
    renderApp();
  }
});


// document.addEventListener("DOMContentLoaded", () => {
//   // initialize taskList class
//   const taskList = new TaskList();
//   //grab all the necessary DOM elements

//   //form and relevant input fields
//   const newTaskForm = document.getElementById("create-task-form");
//   const newTaskDescription = document.getElementById("new-task-description");
//   const newTaskPriority = document.getElementById("new-task-priority");

//   //ul where new tasks will live on the DOM
//   const taskUl = document.getElementById("tasks");

//   const renderApp = () => (taskUl.innerHTML = taskList.renderTasks());
//   //attach event listeners

//   newTaskForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     taskList.createNewTask(newTaskDescription.value);
//     // reset form
//     e.target.reset();
//     renderApp();
//   });

  // taskUl.addEventListener("click", (e) => {
  //   if (e.target.nodeName === "BUTTON") {
  //     taskList.deleteTask(e.target.dataset.description);
  //     renderApp();
  //   }
  // });
// });

//   document.addEventListener('submit', function () {

//     event.preventDefault();
//     console.log('button is clicked');
//   })
// });

