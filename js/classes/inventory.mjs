export class Inventory {
  constructor(storageType) {
    this.items = [];
  }
  pushItem(item) {
    this.items.push(item);
  }
  takeItem(position) {
    this.items[position] = null;
  }
  addItem(item, position) {
    this.items[position] = item;
  }
}
