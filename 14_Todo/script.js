let newTask = document.querySelector("#new-task");
let form = document.querySelector("form");
let todoUl = document.querySelector("#items");
let completeUl = document.querySelector(".complete-list ul");

let createTask = function (task) {
  let listItem = document.createElement("li");
  let checkBox = document.createElement("input");
  let label = document.createElement("label");

  label.innerHTML = task;
  checkBox.type = "checkbox";

  listItem.appendChild(checkBox);
  listItem.appendChild(label);

  return listItem;
};

let addtask = function (e) {
  e.preventDefault();
  let listItem = createTask(newTask.value);
  todoUl.appendChild(listItem);
  newTask.value = "";
  bindInCompleteItems(listItem, completeTask);
};
let completeTask = function () {
  let listItem = this.parentNode;

  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.className = "delete";

  listItem.appendChild(deleteBtn);

  let checkBox = listItem.querySelector('input[type="checkbox"]');
  checkBox.remove();

  completeUl.appendChild(listItem);
  bindCompleteItems(listItem, deleteTask);
};

let deleteTask = function () {
  let listItem = this.parentNode;
    listItem.remove()
//   let ul = listItem.parentNode;
//   ul.removeChild(listItem);
};

let bindInCompleteItems = function (listItem, checkboxClick) {
  let checkbox = listItem.querySelector('input[type="checkbox"]');
  checkbox.onchange = checkboxClick;
};

let bindCompleteItems = function (listItem, deleteButtonClick) {
  let deleteBtn = listItem.querySelector("button");
  deleteBtn.onclick = deleteButtonClick;
};

for (let i = 0; i < todoUl.children.length; i++) {
    bindInCompleteItems(todoUl.children[i],completeTask)
}
for (let i = 0; i < completeUl.children.length; i++) {
    bindCompleteItems(completeUl.children[i],deleteTask)
}

form.addEventListener("submit",addtask)