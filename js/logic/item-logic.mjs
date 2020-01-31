export function grabItem(event) {
  this.style.zIndex = "1000";
  this.classList.add("moving-item");
  document.body.appendChild(this);

  this.style.left = `${event.clientX - this.offsetWidth / 2}px`;
  this.style.top = `${event.clientY - this.offsetHeight / 2}px`;

  document.body.addEventListener("mousemove", moveItem);
  document.body.addEventListener("mouseup", dropItem);
}
function moveItem(event) {
  let movingItem = document.getElementsByClassName("moving-item")[0];
  movingItem.style.left = `${event.clientX - movingItem.offsetWidth / 2}px`;
  movingItem.style.top = `${event.clientY - movingItem.offsetHeight / 2}px`;
}
function dropItem(event) {
  let movingItem = document.getElementsByClassName("moving-item")[0];
  document.body.removeEventListener("mousemove", moveItem);
  document.body.removeEventListener("mouseup", dropItem);
  movingItem.classList.remove("moving-item");

  movingItem.hidden = true;
  if (document.elementFromPoint(event.clientX, event.clientY).classList.contains("item-drop")) {
    let parent = document.elementFromPoint(event.clientX, event.clientY).parentElement;
    while (!parent.classList.contains("inventory")) {
      parent = parent.parentElement;
    }

    document.elementFromPoint(event.clientX, event.clientY).appendChild(movingItem);

    movingItem.style.zIndex = document.elementFromPoint(event.clientX, event.clientY).style.zIndex;
    movingItem.style.left = "0";
    movingItem.style.top = "0";
  }
  movingItem.hidden = false;
}
