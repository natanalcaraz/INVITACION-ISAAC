// --- Contador regresivo ---
const countdown = () => {
  const targetDate = new Date("October 11, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days < 0 ? 0 : days;
  document.getElementById("hours").innerText = hours < 0 ? 0 : hours;
  document.getElementById("minutes").innerText = minutes < 0 ? 0 : minutes;
  document.getElementById("seconds").innerText = seconds < 0 ? 0 : seconds;
};

setInterval(countdown, 1000);
