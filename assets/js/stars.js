/* ============================================================
   🌠 ANIMOWANE TŁO Z GWIAZDAMI
   ============================================================ */
const canvas = document.createElement("canvas");
document.querySelector("stars").appendChild(canvas);
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const stars = Array.from({ length: 200 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  size: Math.random() * 1.5,
  speed: 0.2 + Math.random() * 0.3,
  opacity: 0.3 + Math.random() * 0.7,
}));

const meteors = [];

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const s of stars) {
    ctx.globalAlpha = s.opacity * (0.6 + Math.random() * 0.4);
    ctx.fillStyle = "white";
    ctx.fillRect(s.x, s.y, s.size, s.size);
    s.y += s.speed;
    if (s.y > canvas.height) s.y = 0;
  }

  if (Math.random() < 0.015) {
    meteors.push({
      x: Math.random() * canvas.width,
      y: 0,
      len: 120 + Math.random() * 80,
      speed: 8 + Math.random() * 5,
      opacity: 0.6 + Math.random() * 0.4,
    });
  }

  for (let i = meteors.length - 1; i >= 0; i--) {
    const m = meteors[i];
    const grad = ctx.createLinearGradient(m.x, m.y, m.x - m.len, m.y + m.len);
    grad.addColorStop(0, `rgba(255,255,255,${m.opacity})`);
    grad.addColorStop(1, "rgba(255,255,255,0)");
    ctx.strokeStyle = grad;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(m.x, m.y);
    ctx.lineTo(m.x - m.len, m.y + m.len);
    ctx.stroke();

    m.x -= m.speed;
    m.y += m.speed;
    if (m.y > canvas.height + 100) meteors.splice(i, 1);
  }

  requestAnimationFrame(animateStars);
}
animateStars();
