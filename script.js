const logosContainer = document.querySelector(".logos");
const logos = document.querySelectorAll(".logos img");
let scrollAmount = 0;
const scrollSpeed = 2; 
const maxScroll = logosContainer.scrollWidth / 2; 

function autoScroll() {
  scrollAmount += scrollSpeed;
  if (scrollAmount >= maxScroll) {
    scrollAmount = 0;
    logosContainer.style.transition = 'none'; // отключаем анимацию для мгновенного перехода
    logosContainer.style.transform = `translateX(0)`; // возвращаем в начало
    setTimeout(() => {
      logosContainer.style.transition = 'transform 0.5s linear'; // восстанавливаем анимацию
    }, 5); // небольшая задержка, чтобы анимация восстановилась
  }
  logosContainer.style.transform = `translateX(-${scrollAmount}px)`;
}

let interval = setInterval(autoScroll, 50);

logosContainer.addEventListener("mouseenter", () => clearInterval(interval));
logosContainer.addEventListener("mouseleave", () => {
  interval = setInterval(autoScroll, 50);
});

// Для кнопки прокрутки
document.getElementById("scrollRight").addEventListener("click", () => {
  scrollAmount += 100;
  if (scrollAmount >= maxScroll) {
    scrollAmount = 0;
  }
  logosContainer.style.transform = `translateX(-${scrollAmount}px)`;
});

console.log("Урааа! Работает бесконечная карусель!");

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('shrunk');
  } else {
    header.classList.remove('shrunk');
  }
});
