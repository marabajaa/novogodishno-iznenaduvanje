const scenes = [...document.querySelectorAll('.scene')];
const progress = document.getElementById('progress');
let current = 0;
function showScene(index) {
  scenes[current].classList.remove('active');
  current = index;
  scenes[current].classList.add('active');
  progress.textContent = `${String(current + 1).padStart(2, '0')} / 06`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.querySelectorAll('[data-next]').forEach(button => {
  button.addEventListener('click', () => showScene(Math.min(current + 1, scenes.length - 1)));
});
document.getElementById('gift').addEventListener('click', event => {
  event.currentTarget.classList.add('opened');
  document.getElementById('gift-text').hidden = false;
  document.querySelector('#scene-1 .next-after').hidden = false;
});
document.querySelectorAll('.heart-card').forEach(button => {
  button.addEventListener('click', () => {
    document.getElementById('heart-message').textContent = button.dataset.message;
  });
});
document.getElementById('envelope').addEventListener('click', () => {
  document.getElementById('envelope').hidden = true;
  document.getElementById('letter').hidden = false;
  document.querySelector('#scene-4 .next-after').hidden = false;
});
document.getElementById('restart').addEventListener('click', () => showScene(0));
const snow = document.getElementById('snow');
for (let i = 0; i < 24; i++) {
  const flake = document.createElement('span');
  flake.className = 'flake';
  flake.textContent = i % 3 === 0 ? '✦' : '❄';
  flake.style.left = `${(i * 41 + 7) % 100}%`;
  flake.style.fontSize = `${9 + (i % 4) * 3}px`;
  flake.style.animationDuration = `${9 + i % 9}s`;
  flake.style.animationDelay = `${-i * .8}s`;
  snow.appendChild(flake);
}
