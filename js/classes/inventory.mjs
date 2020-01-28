import {greys} from "../constants.mjs";
import {grabItem} from "../logic/item-logic.mjs";

export class Inventory {
  constructor(htmlElement, storageType, slots) {
    this.htmlElement = htmlElement;
    this.storageType = storageType;
    this.slots = slots;
    this.items = [];
  }
  pushItem(item) {
    this.items.push(item);
    this.createHtml();
    this.updateHtml();
  }
  takeItem(position) {
    this.items[position] = null;
  }
  addItem(item, position) {
    this.items[position] = item;
  }
  updateFromHtml() {
    let wrapperInventory = this.htmlElement;
    while (!wrapperInventory.classList.contains("inventory")) {
      wrapperInventory = wrapperInventory.parent
    }
    alert(wrapperInventory.classList.entries());
  }
  createHtml() {
    for (let slot = 0; slot < this.slots; slot++) {
      let newSlot = document.createElement("div");
      newSlot.classList.add("inventory-slot", "item-drop");
      newSlot.style.backgroundColor = greys[(slot + Math.floor(slot / 8)) % 2];

      this.htmlElement.appendChild(newSlot);
    }
  }
  updateHtml() {
    for (let i = 0; i < this.slots; i++) {
      if (this.htmlElement.children[i] == null) {

      } else {
        let item = document.createElement("div");
        item.classList.add("item", this.items[i].name);
        item.addEventListener("mousedown", grabItem);
        this.htmlElement.children[0].children[i].appendChild(item);
      }
    }
  }
}
