const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const scoreDisplay = document.getElementById("score"); // Elemento para mostrar a pontuação

let score = 0; // Inicializa a pontuação
let maxScore = 1000; // Limite máximo de pontuação

function jump() {
  // Permitir pular sempre
  dino.classList.remove("jump");
  void dino.offsetWidth;
  dino.classList.add("jump");
}

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    jump();
  }
});

// Função para aumentar a pontuação a cada segundo
function increaseScore() {
  if (score < maxScore) {
    score += 10;
    scoreDisplay.textContent = "Pontuação: " + score; // Exibe a pontuação no elemento HTML
  }

  // Quando atingir a pontuação máxima, exibe a mensagem "Você venceu!"
  if (score === maxScore) {
    alert("Você venceu!");
    clearInterval(scoreInterval); // Interrompe o aumento de pontuação
  }
}

// Função para mover o cacto
function moveCactus() {
  let cactusLeft = window.innerWidth;
  let speed = 5;
  let acceleration = 0.001;

  let interval = setInterval(() => {
    cactusLeft -= speed;
    cactus.style.left = cactusLeft + "px";

    const dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
    const dinoLeft = 50;
    const cactusWidth = 20;

    if (
      cactusLeft < dinoLeft + 40 &&
      cactusLeft + cactusWidth > dinoLeft &&
      dinoBottom < 40
    ) {
      alert("Game Over!");
      clearInterval(interval);
      location.reload();
    }

    if (cactusLeft < -cactusWidth) {
      cactusLeft = window.innerWidth + Math.random() * 300;
    }

    speed += acceleration;
  }, 20);
}

// Inicia o aumento de pontos a cada segundo
let scoreInterval = setInterval(increaseScore, 1000);

moveCactus();
