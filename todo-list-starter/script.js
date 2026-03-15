let todoTasks = ["Walk Chilli", "Make Dinner"];
let todoTasksStatus = [false, true];

const todoList = document.getElementById("todo-list");

const createNewTodoItemElement = (task, index) => {
  // Create a <p> element to store the task description
  const newTodoTaskTextElement = document.createElement("p");
  newTodoTaskTextElement.innerText = task;

  // Apply a CSS class to the completed items
  if (todoTasksStatus[index] === true) {
    newTodoTaskTextElement.classList.add("complete");
  }

  // Create a <li> elementto contain the paragraphy
  const newTodoTaskElement = document.createElement("li");
  newTodoTaskElement.appendChild(newTodoTaskTextElement);

  // Adding a button to mark each item as complete
  const completeButtonElement = document.createElement("input");
  completeButtonElement.type = "button";
  completeButtonElement.value = todoTasksStatus[index] ? "Incomplete" : "Completed";
  completeButtonElement.onclick = function () {
    toggleComplete(index);
  };
  newTodoTaskElement.appendChild(completeButtonElement);
  return newTodoTaskElement;
};


for (const [index, task] of todoTasks.entries()) {
  const newTodoTaskElement = createNewTodoItemElement(task, index);
  // Add the <li> element to the list
  todoList.appendChild(newTodoTaskElement);
}

const addTask = () => {
  const newTask = document.getElementById("new-task-text");
  if (newTask.value) {
    todoTasks.push(newTask.value);
    todoTasksStatus.push(false);
    newTask.value = "";
    updateTodoList();
  }
};

const updateTodoList = (task, index) => {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";
  for (const [index, task] of todoTasks.entries()) {
    const newTodoTaskElement = createNewTodoItemElement(task, index);
    todoList.appendChild(newTodoTaskElement);
  }
};


const toggleComplete = (index) => {
  todoTasksStatus[index] = !todoTasksStatus[index];
  updateTodoList();
};

updateTodoList();
