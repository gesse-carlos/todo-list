import FinishButton from "./components/finishTask.js";
import DeleteButton from "./components/deleteTask.js";

const formButton = document.querySelector("[data-form-button]");
const taskSetter = (event) => {
  event.preventDefault();

  const unlist = document.querySelector("[data-list]");
  const formInput = document.querySelector("[data-form-input]");
  const inputValue = formInput.value;
  
  const task = document.createElement("li");
  task.classList.add("task");
  const content = `<p class="content">${inputValue}</p>`;

  task.innerHTML = content;

  task.appendChild(FinishButton());
  task.appendChild(DeleteButton());
  unlist.appendChild(task); 
 
}

formButton.addEventListener("click", taskSetter);

