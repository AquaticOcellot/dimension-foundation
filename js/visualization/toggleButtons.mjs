export function toggleButtons() {
  let toggleButtons = document.getElementsByClassName("button-toggle");
  for (let button of toggleButtons) {
    button.addEventListener("mousedown", function () {
      this.classList.add("held");
    })
  }
}
