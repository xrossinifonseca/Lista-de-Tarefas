"use strict";
const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");
const taskContainer = document.querySelector(".task-container");
const validateInput = () => inputElement.value.trim().length > 0;

const handleAddTask = () => {
  const inputIsvalid = validateInput();

  if (!inputIsvalid) {
    inputElement.classList.add("error");
  }
  const taskItemContainer = document.createElement("div");
  taskItemContainer.classList.add("task-item");

  const taskContent = document.createElement("p");
  taskContent.innerText = inputElement.value;

  taskContainer.addEventListener("click", () => handleClick(taskContent));

  const deleteItem = document.createElement("button");
  deleteItem.classList.add("button-delete");
  deleteItem.innerText = "Delete";

  deleteItem.addEventListener("click", () =>
    handleDeleteClick(taskItemContainer, taskContent)
  );

  taskItemContainer.appendChild(taskContent);
  taskItemContainer.appendChild(deleteItem);

  taskContainer.appendChild(taskItemContainer);

  inputElement.value = "";
};

const handleClick = (taskContent) => {
  const tasks = taskContainer.childNodes;
  for (const task of tasks) {
    if (task.firstChild.isSameNode(taskContent)) {
      task.firstChild.classList.toggle("completed");
    }
  }
};
const handleDeleteClick = (taskItemContainer, taskContent) => {
  const tasks = taskContainer.childNodes;

  for (const task of tasks) {
    if (task.firstChild.isSameNode(taskContent)) {
      taskItemContainer.remove();
    }
  }
};

const handleInputChange = () => {
  const inputIsvalid = validateInput();

  if (inputIsvalid) {
    return inputElement.classList.remove("error");
  }
};

addTaskButton.addEventListener("click", () => handleAddTask());
inputElement.addEventListener("change", () => handleInputChange());
