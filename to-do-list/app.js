const formAddToDo = document.querySelector(".form-add-todo");
const toDoConatiner = document.querySelector(".todos-container");
const inputSearch = document.querySelector(".form-search input");

formAddToDo.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = e.target.add.value.trim();
  if (inputValue.length) {
    // no momento do envio form, estiver 0, '', o bloco do if não sera executado
    toDoConatiner.innerHTML += ` 
  <li class="list-group-item">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt delete"></i>
  </li>`;

    e.target.reset(); // metodo reset: restaura os valores default de uma elemento do form
  }

  console.log(inputValue);
});

toDoConatiner.addEventListener("click", (e) => {
  const clickedElement = e.target;
  if (Array.from(clickedElement.classList).includes("delete")) {
    clickedElement.parentElement.remove();
  }
});

inputSearch.addEventListener("input", (e) => {
  const inputValue = e.target.value.trim();
  Array.from(toDoConatiner.children)
    .filter((text) => !text.textContent.includes(inputValue))
    .forEach((toDo) => {
      toDo.classList.remove("d-flex");
      toDo.classList.add("hidden");
    });

  Array.from(toDoConatiner.children)
    .filter((text) => text.textContent.includes(inputValue))
    .forEach((toDo) => {
      toDo.classList.remove("hidden");
      toDo.classList.add("d-flex");
    });
});
