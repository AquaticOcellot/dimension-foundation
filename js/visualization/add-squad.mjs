import {greys} from "../constants.mjs";

export function newSquad() {
  let squad = document.createElement("div");
  squad.classList.add("squad");
  squad.style.backgroundColor = greys[(document.getElementById("inventory-squads").childElementCount + 1) % 2];

  let squadHeader = document.createElement("div");
  squadHeader.classList.add("squad-header");
  squad.appendChild(squadHeader);

  let squadInventory = document.createElement("div");
  squadInventory.classList.add("inventory");

  for (let i = 0; i < 6; i++) {
    let itemSlot = document.createElement("div");
    itemSlot.classList.add("inventory-slot", "item-drop");
    squadInventory.appendChild(itemSlot);
  }
  squad.appendChild(squadInventory);
  document.getElementById("new-squad").before(squad);
}
