document.addEventListener("DOMContentLoaded", () => {
  // 1️⃣ Typed.js Animation
  var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Graphic Designer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });

  // 2️⃣ Technical Bars Animation
  const bars = document.querySelectorAll(".Technical-bars .bar");
  bars.forEach((bar, index) => {
    const progress = bar.querySelector(".progress-line span");
    const percentNum = bar.querySelector(".percentage-num");
    const percent = parseInt(bar.dataset.percent);

    // Animate bar width
    setTimeout(() => {
      progress.style.width = percent + "%";
    }, 300 + index * 200);

    // Animate number counting
    let current = 0;
    const duration = 1500;
    const intervalTime = duration / percent;
    const counter = setInterval(() => {
      current++;
      percentNum.textContent = current + "%";
      if (current >= percent) clearInterval(counter);
    }, intervalTime);
  });

  // 3️⃣ Radial Bars Animation
  const radialBars = document.querySelectorAll(".radial-bar");
  radialBars.forEach((bar, index) => {
    const circle = bar.querySelector(".progress-bar");
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const percent = parseInt(bar.dataset.percentage);
    const percentText = bar.querySelector(".percentage");

    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference;

    // Animate radial stroke
    setTimeout(() => {
      circle.style.strokeDashoffset = circumference * (1 - percent / 100);
    }, 500 + index * 300);

    // Animate number counting
    let current = 0;
    const duration = 1500;
    const intervalTime = duration / percent;
    const counter = setInterval(() => {
      current++;
      percentText.textContent = current + "%";
      if (current >= percent) clearInterval(counter);
    }, intervalTime);
  });
});
