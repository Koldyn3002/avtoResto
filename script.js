const logosContainer = document.querySelector(".logos-container");
const logos = document.querySelector(".logos");
let isDragging = false;
let startPosition = 0;
let scrollLeft = 0;

// Отключаем стандартную анимацию при взаимодействии
document.getElementById("scrollRight").addEventListener("click", () => {
  // Останавливаем автоматическую анимацию
  logos.style.animationPlayState = "paused";
  
  // Прокручиваем на ширину одного логотипа
  logosContainer.scrollLeft += 200; // Можно настроить значение
});

// Возобновляем анимацию после того как пользователь закончил взаимодействие
let resumeTimeout;
function resumeAnimation() {
  clearTimeout(resumeTimeout);
  resumeTimeout = setTimeout(() => {
    logos.style.animationPlayState = "running";
  }, 2000); // Возобновляем через 2 секунды после последнего взаимодействия
}

// Добавляем возможность перетаскивания
logosContainer.addEventListener("mousedown", (e) => {
  isDragging = true;
  logos.style.animationPlayState = "paused";
  startPosition = e.pageX - logosContainer.offsetLeft;
  scrollLeft = logosContainer.scrollLeft;
});

logosContainer.addEventListener("mouseleave", () => {
  isDragging = false;
  resumeAnimation();
});

logosContainer.addEventListener("mouseup", () => {
  isDragging = false;
  resumeAnimation();
});

logosContainer.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - logosContainer.offsetLeft;
  const walk = (x - startPosition) * 2; // Множитель скорости
  logosContainer.scrollLeft = scrollLeft - walk;
});