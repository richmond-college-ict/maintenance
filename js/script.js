const neonFill = document.getElementById('neonFill');
const loadingScreen = document.getElementById('loadingScreen');
const mainContent = document.getElementById('mainContent');

let progress = 0;
const progressInterval = setInterval(() => {
  progress += Math.random() * 15;
  if (progress > 100) progress = 100;
  neonFill.style.width = `${progress}%`;

  if (progress >= 100) {
    clearInterval(progressInterval);
    setTimeout(() => {
      loadingScreen.classList.add('hidden');
      mainContent.classList.add('visible');
    }, 500);
  }
}, 200);

// Mouse-based glow for entire main content
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  mainContent.style.setProperty('--x', `${x}%`);
  mainContent.style.setProperty('--y', `${y}%`);
});