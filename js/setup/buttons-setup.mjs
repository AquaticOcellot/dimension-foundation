import {toggleButtons} from "../visualization/toggleButtons.mjs";

export function buttonsSetup() {
  switches();
  toggles();
  clickables();
}

function switches() {
  switchMechanical("switch-main", "main-window");

  switchVisual("switch-main");
}

function switchMechanical(buttonClass, windowClass) {
  let buttons = document.getElementsByClassName(`${buttonClass}`);
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mousedown", function () {
      switchWindow(windowClass, `${windowClass}-${i}`)
    })
  }
}

function switchWindow(windowClass, targetWindow) {
  let windows = document.getElementsByClassName(windowClass);
  for (let i = 0; i < windows.length; i++) {
    windows[i].style.display = "none";
  }
  document.getElementById(targetWindow).style.display = "flex";
}

function switchVisual(buttonClass) {
  let buttonsSwitchMain = document.getElementsByClassName(`${buttonClass}`);
  for (let i = 0; i < buttonsSwitchMain.length; i++) {
    buttonsSwitchMain[i].addEventListener("mousedown", function () {
      let buttonsSwitchMain = document.getElementsByClassName(`${buttonClass}`);
      for (let i = 0; i < buttonsSwitchMain.length; i++) {
        buttonsSwitchMain[i].classList.remove("held");
      }
      this.classList.toggle("held");
    })
  }
}

function toggles() {
  toggleButtons();
}

function clickables() {

}

