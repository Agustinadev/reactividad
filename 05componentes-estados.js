const d = document,
  $input = d.querySelector(".to-do-item"),
  $form = d.querySelector(".to-do-form");

const state = {
  todoList: [],
};

const template = (props) => {
  if (template.data.todoList.length < 1) {
    return `<p>No hay listas de cosas por hacer</p>`;
  }
  const toDo = template.data.todoList
    .map((item) => `<li>${item}</li>`)
    .join("");
  return toDo;
};
template.data = {
  todoList: [],
};

const render = () => {
  const $list = d.querySelector(".to-do-list");
  $list.innerHTML = template();
};

//para no pegar directamente en el state
const setState = (obj) => {
  for (const key in obj) {
    if (template.data.hasOwnProperty(key)) {
      template.data[key] = obj[key];
    }
    render();
  }
};
//propiedades por defecto
setState({
  todoList: ["Lista 1", "Lista 2", "Lista 3"],
});

const copyState = () => {
  return JSON.parse(JSON.stringify(template.data));
};

d.addEventListener("DOMContentLoaded", render);

d.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(template.data);
  const data = copyState();
  data.todoList.push($input.value);
  setState({
    todoList: data.todoList,
  });
  $input.value = "";
  $input.focus();
  console.log(template.data);
});
