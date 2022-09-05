const text = document.getElementById("input");
const allclearBtn = document.getElementById("clear");
// const submitBtn = document.getElementById("submit");
const form = document.getElementById("form");
// const displaySection = document.querySelector(".display_section");
const list = document.querySelector(".item_list");

function appendEvent() {
  const listEvent = document.createElement("li");
  const p = document.createElement("p");
  const event = document.createTextNode(text.value);
  const deleteBtn = document.createElement("button");
  const doneBtn = document.createElement("button");
  //   const number = document.querySelectorAll("p").length + 1;
  deleteBtn.innerHTML = "X";
  doneBtn.innerHTML = "Done";
  p.appendChild(event);

  //   const output = `${event.textContent} `;

  //   listEvent.insertAdjacentHTML("beforeend", output);
  listEvent.appendChild(p);
  listEvent.appendChild(deleteBtn);
  listEvent.appendChild(doneBtn);

  list.append(listEvent);

  deleteBtn.addEventListener("click", () => {
    list.removeChild(listEvent);
  });

  doneBtn.addEventListener(
    "click",
    () => (p.style.textDecoration = "line-through")
  );
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
