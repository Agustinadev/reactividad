const d = document,
  $input = d.querySelector(".to-do-item"),
  $form = d.querySelector(".to-do-form");

const state = {
  todoList: [],
};

const template = () => {
  if (state.todoList.length < 1) {
    return `<p>No hay listas de cosas por hacer</p>`;
  }
  const toDo = state.todoList.map((item) => `<li>${item}</li>`).join("");
  return toDo;
};

const render = () => {
  console.log(state);
  const $list = d.querySelector(".to-do-list");
  $list.innerHTML = template();
};

d.addEventListener("DOMContentLoaded", render);
d.addEventListener("submit", (e) => {
  e.preventDefault();
  state.todoList.push($input.value);
  render();
});
