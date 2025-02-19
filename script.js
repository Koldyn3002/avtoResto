const logosContainer = document.querySelector(".logos");
const logos = document.querySelectorAll(".logos img");
let scrollAmount = 0;
const scrollSpeed = 2;
const logoWidth = logos[0].offsetWidth + parseInt(getComputedStyle(logos[0]).marginRight); // Ширина логотипа + отступ между логотипами
const logosCount = logos.length;
const containerWidth = logosContainer.offsetWidth;

// Дублируем логотипы для бесконечной прокрутки
for (let i = 0; i < logosCount; i++) {
  const clone = logos[i].cloneNode(true); // Клонируем каждый логотип
  logosContainer.appendChild(clone); // Добавляем к контейнеру
}

function autoScroll() {
  scrollAmount += scrollSpeed;
  
  // Когда контейнер прокрутился на всю длину, возвращаем в начало
  if (scrollAmount >= logoWidth * logosCount) {
    scrollAmount = 0;
    logosContainer.style.transition = "none"; // Без анимации
    logosContainer.style.transform = `translateX(0)`; // Перемещаем в начало
    setTimeout(() => {
      logosContainer.style.transition = "transform 0.5s linear"; // Включаем плавный переход
    }, 5);
  }
  
  logosContainer.style.transform = `translateX(-${scrollAmount}px)`; // Двигаем контейнер
}

let interval = setInterval(autoScroll, 50);

// Остановка прокрутки при наведении
logosContainer.addEventListener("mouseenter", () => clearInterval(interval));

// Возобновление прокрутки при уходе мыши
logosContainer.addEventListener("mouseleave", () => {
  interval = setInterval(autoScroll, 50);
});

// Кнопка прокрутки вправо (если требуется)
document.getElementById("scrollRight").addEventListener("click", () => {
  scrollAmount += 100;
  if (scrollAmount >= logoWidth * logosCount) {
    scrollAmount = 0;
  }
  logosContainer.style.transform = `translateX(-${scrollAmount}px)`;
});

console.log("Урааа! Работает бесконечная карусель!");

// Эффект изменения шапки при прокрутке страницы
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("shrunk");
  } else {
    header.classList.remove("shrunk");
  }
});
