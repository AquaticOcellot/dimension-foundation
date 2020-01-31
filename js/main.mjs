import {mainSetup} from "./setup/main-setup.mjs";
import {update} from "./logic/update.mjs";

import {Inventory} from "./classes/inventory.mjs";
import {Item} from "./classes/item.mjs";

let inventory = new Inventory(document.getElementById("inventory"), "resource", 90);

main();
function main() {
  mainSetup();

  setInterval(update, 1000 / 60);
  //setInterval(function() {alert(inventory.items[0].name)}, 10000);

  inventory.pushItem(new Item("resource", "iron", 1));
  inventory.pushItem(new Item("resource", "steel", 1));
  inventory.pushItem(new Item("resource", "steel", 1));
}
