const d = document,
  $form = d.querySelector(".to-do-form"),
  $input = d.querySelector(".to-do-item"),
  $list = d.querySelector(".to-do-list");

d.addEventListener("submit", (e) => {
  e.preventDefault();
  $li = d.createElement("li");
  $li.textContent = $input.value;
  $list.appendChild($li);
  $input.value = "";
  $input.focus();
});
