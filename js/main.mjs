import {Item} from "./classes/item.mjs";
import {mainSetup} from "./logic/setup/main-setup.mjs";

let techProgress = 0;
let fightProgressAlly = 30;
let inventory = [];
let squadInventories = [];

main();
function main() {
  mainSetup();

  document.getElementById("add-squad").addEventListener("click", addSquad);

  makeToggleButtonsVisuals();

  createInventory(inventory, 12, 8);

  addItemToInventorySlot(new Item("resource", "iron", 1), 2, 4);

  let updater = setInterval(update, 1000 / 60);
  setInterval(function() {alert(squadInventories)}, 10000);
}
function update() {
  techProgress += 1 / 60;
  while (techProgress > 100) {
    techProgress -= 100;
    fightProgressAlly += 1;
    document.getElementById("fight-progress-bar-ally").style.width = `${fightProgressAlly}%`;
  }
  document.getElementById("tech-progress-text").innerText = `${Math.floor(techProgress)}`;
  document.getElementById("tech-progress-bar").style.width = `${techProgress}%`;

}




function createInventory(inventory, rows, slots) {
  for (let row = 0; row < rows; row++) {
    createRow(inventory, row, slots);
  }
}
function addRow(inventory) {
  let row = inventory.length;
  let slots = inventory[0].length;
  createRow(inventory, row, slots);
}
function createRow(inventory, row, slots) {
  let newRow = [];
  let newRowNode = document.createElement("div");
  newRowNode.classList.add("inventory-row");
  for (let slot = 0; slot < slots; slot++) {
    let newSlot = document.createElement("div");
    newSlot.classList.add("inventory-slot", "item-drop");
    newSlot.style.backgroundColor = greys[(row + slot) % 2];

    newRow.push(null);
    newRowNode.appendChild(newSlot);
  }
  document.getElementById("inventory").appendChild(newRowNode);
  inventory.push(newRow);
}
function addItemToInventorySlot(item, row, slot) {
  let node = document.createElement("div");
  node.classList.add("item", `${item.type}`, `${item.name}`, `${item.amount}`);
  node.addEventListener("mousedown", grabItem);

  document.getElementById("inventory").children[row].children[slot].appendChild(node);

  inventory[row][slot] = `${item.name}`;
}
function addItemToInventory(ofClass) {
  let node = document.createElement("div");
  node.classList.add("item", `${ofClass}`);
  node.addEventListener("mousedown", grabItem);

  let ItemNotPut = true;
  while (ItemNotPut) {

  }

  document.getElementById("inventory").children[row].children[slot].appendChild(node);

  inventory[row][slot] = `${ofClass}`;
}
function addItemToSquad(squad, slot, ofClass) {
  let node = document.createElement("div");
  node.classList.add("item", `${ofClass}`);
  node.addEventListener("mousedown", grabItem);

  document.getElementById("squads").children[squad].children[slot].appendChild(node);

  squadInventories[squad][slot] = `${ofClass}`;
}
function grabItem(event) {
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
  this.addEventListener("mouseup", dropItem)
}
function moveItem(event) {
  this.style.left = `${event.clientX - this.offsetWidth / 2}px`;
  this.style.top = `${event.clientY - this.offsetHeight / 2}px`;
}
function dropItem(event) {
  this.removeEventListener("mousemove", moveItem);

  this.hidden = true;
  if (document.elementFromPoint(event.clientX, event.clientY).classList.contains("item-drop")) {

    document.elementFromPoint(event.clientX, event.clientY).appendChild(this);

    this.style.zIndex = document.elementFromPoint(event.clientX, event.clientY).style.zIndex;
    this.style.left = "0";
    this.style.top = "0";
    this.style.width = "100%";
    this.style.height = "100%";

  }
  this.hidden = false;

  updateInventory();
}
function updateInventory() {
  for (let row = 0; row < inventory.length; row++) {
    for (let slot = 0; slot < inventory[row].length; slot++) {
      if (document.getElementById("inventory").children[row].children[slot].hasChildNodes()) {
        inventory[row][slot] = document.getElementById("inventory").children[row].children[slot].children[0].classList[1]
      } else {
        inventory[row][slot] = null;
      }
    }
  }
  for (let squad = 0; squad < squadInventories.length; squad++) {
    for (let slot = 0; slot < squadInventories[squad].length; slot++) {
      if (document.getElementById("inventory-squads").children[squad].children[1].children[slot].hasChildNodes()) {
        squadInventories[squad][slot] = document.getElementById("inventory-squads").children[squad].children[1].children[slot].children[0].classList[2];
      } else {
        squadInventories[squad][slot] = null;
      }
    }
  }
}
function makeToggleButtonsVisuals() {
  let buttonsToggle = document.getElementsByClassName("button-toggle");
  for (let i = 0; i < buttonsToggle.length; i++) {
    buttonsToggle[i].addEventListener("mousedown", function () {
      this.classList.toggle("held")
    });
  }
}
