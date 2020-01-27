import {greys} from "../constants"

export function addSquad() {
  let squad = document.createElement("div");
  squad.classList.add("squad");
  squad.style.backgroundColor = greys[(document.getElementById("inventory-squads").childElementCount + 1) % 2];

  let squadHeader = document.createElement("div");
  squadHeader.classList.add("squad-header");
  squad.appendChild(squadHeader);

  let squadInventory = document.createElement("div");
  squadInventory.classList.add("squad-inventory");

  for (let i = 0; i < 6; i++) {
    let itemSlot = document.createElement("div");
    itemSlot.classList.add("squad-inventory-slot", "item-drop");
    squadInventory.appendChild(itemSlot);
  }
  squad.appendChild(squadInventory);
  document.getElementById("add-squad").before(squad);
}
