const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const card   = document.querySelector(".card");

let noClicks = 0;

noBtn.addEventListener("mouseover", () => {
  noClicks++;

  // make Yes button bigger each time
  const scale = 1 + noClicks * 0.1;
  yesBtn.style.transform = `scale(${scale})`;

  // move No button to a random place inside the card
  const cardRect = card.getBoundingClientRect();
  const maxX = cardRect.width - noBtn.offsetWidth;
  const maxY = cardRect.height - noBtn.offsetHeight - 60; // keep inside

  const randX = Math.random() * maxX;
  const randY = Math.random() * maxY + 80;

  noBtn.style.position = "absolute";
  noBtn.style.left = `${randX}px`;
  noBtn.style.top  = `${randY}px`;
});

yesBtn.addEventListener("click", () => {
  card.innerHTML = `
    <div class="emoji">🥰</div>
    <h1>Yay! I knew you'd say yes! 💖</h1>
    <p>See you on our date 😉</p>
  `;
});
