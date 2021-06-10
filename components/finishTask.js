const FinishButton = () => {
  const FinishButton = document.createElement("button");

  FinishButton.classList.add("check-button");
  FinishButton.innerText = "Concluir";
  FinishButton.addEventListener("click", finishTask);

  return FinishButton;
}

const finishTask = (event) => {
  const finishButton = event.target;

  const completedTask = finishButton.parentElement;

  completedTask.classList.toggle("done");
}

export default FinishButton