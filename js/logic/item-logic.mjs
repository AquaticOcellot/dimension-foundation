export function grabItem(event) {
  this.style.position = "absolute";
  this.style.zIndex = "1000";
  document.body.appendChild(this);

  this.style.width = "5vw";
  this.style.height = "5vw";

  this.style.left = `${event.clientX - this.offsetWidth / 2}px`;
  this.style.top = `${event.clientY - this.offsetHeight / 2}px`;

  let initialX = event.clientX;
  let initialY = event.clientY;

  this.addEventListener("mousemove", moveItem);
  this.addEventListener("mouseup", dropItem);
}
function moveItem(event) {
  this.style.left = `${event.clientX - this.offsetWidth / 2}px`;
  this.style.top = `${event.clientY - this.offsetHeight / 2}px`;
}
function dropItem(event) {
  this.removeEventListener("mousemove", moveItem);

  this.hidden = true;
  if (document.elementFromPoint(event.clientX, event.clientY).classList.contains("item-drop")) {
    let parent = document.elementFromPoint(event.clientX, event.clientY).parentElement;
    while (!parent.classList.contains("inventory")) {
      parent = parent.parentElement;
    }

    document.elementFromPoint(event.clientX, event.clientY).appendChild(this);

    this.style.zIndex = document.elementFromPoint(event.clientX, event.clientY).style.zIndex;
    this.style.left = "0";
    this.style.top = "0";
    this.style.width = "100%";
    this.style.height = "100%";

  }
  this.hidden = false;
}
