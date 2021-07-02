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

//para no pegar directamente en el state
const setState = (obj) => {
  for (const key in obj) {
    if (state.hasOwnProperty(key)) {
      state[key] = obj[key];
    }
    render();
  }
};

//propiedades por defecto

d.addEventListener("DOMContentLoaded", (e) => {
  render();
  setState({
    todoList: ["Lista 1", "Lista 2", "Lista 3"],
  });
});
d.addEventListener("submit", (e) => {
  e.preventDefault();
  state.todoList.push($input.value);
  render();
});
