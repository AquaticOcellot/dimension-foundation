let techProgress = 0;
let fightProgressAlly = 30;

export function update() {
  updateTech();
}

function updateTech() {
  techProgress += 1 / 60;
  while (techProgress > 100) {
    techProgress -= 100;
    fightProgressAlly += 1;
    document.getElementById("fight-progress-bar-ally").style.width = `${fightProgressAlly}%`;
  }
  document.getElementById("tech-progress-text").innerText = `${Math.floor(techProgress)}`;
  document.getElementById("tech-progress-bar").style.width = `${techProgress}%`;
}
