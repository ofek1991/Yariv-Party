const countdown = document.getElementById('countdown');

// טיסה ב-2/5/2025 בשעה 07:20
const flightDate = new Date("2025-05-02T04:20:00Z").getTime();

const timer = setInterval(function() {
  const now = new Date().getTime();
  const distance = flightDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days} ימים ${hours} שעות ${minutes} דקות ${seconds} שניות`;

  if (distance < 0) {
    clearInterval(timer);
    countdown.innerHTML = "יאללה ממריאים!";
  }
}, 1000);
