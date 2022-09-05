const text = document.getElementById("input");
const allclearBtn = document.getElementById("clear");
const form = document.getElementById("form");
const list = document.querySelector(".item_list");

function appendEvent() {
  const listEvent = document.createElement("li");
  const p = document.createElement("p");
  const event = document.createTextNode(text.value);
  const deleteBtn = document.createElement("button");
  const doneBtn = document.createElement("button");
  deleteBtn.innerHTML = "X";
  doneBtn.innerHTML = "Done";
  p.appendChild(event);

  //   append multiple child
  listEvent.append(p, deleteBtn, doneBtn);

  list.append(listEvent);

  deleteBtn.addEventListener("click", () => {
    list.removeChild(listEvent);
  });

  doneBtn.addEventListener("click", () => {
    (p.style.textDecoration = "line-through")(
      (p.style.textDecorationThickness = "5px")
    );
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  appendEvent();
  text.value = "";
});

allclearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
});
