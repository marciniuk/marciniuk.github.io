const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

const letters = "01";
const size = 14;
let drops = [];

function setup() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const columns = Math.ceil(canvas.width / size);
  drops = Array(columns).fill(1);
}

function draw() {
  ctx.fillStyle = "rgba(2, 11, 27, 0.04)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#2d4e8d";
  ctx.font = size + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * size, drops[i] * size);

    if (drops[i] * size > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setup();
window.addEventListener("resize", setup);

setInterval(draw, 30);
