import {newSquad} from "../visualization/add-squad.mjs";

export function addEventListeners() {
  document.getElementById("new-squad").addEventListener("click", newSquad);
}
