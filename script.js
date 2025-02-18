const logosContainer = document.querySelector(".logos");
const logos = document.querySelectorAll(".logos img");
let scrollAmount = 0;
const scrollSpeed = 2; 
const maxScroll = logosContainer.scrollWidth / 2; 

function autoScroll() {
  scrollAmount += scrollSpeed;
  if (scrollAmount >= maxScroll) {
    scrollAmount = 0;
    logosContainer.style.transition = 'none'; 
    logosContainer.style.transform = `translateX(0)`; 
    setTimeout(() => {
      logosContainer.style.transition = 'transform 0.5s linear'; 
    }, 5); 
  }
  logosContainer.style.transform = `translateX(-${scrollAmount}px)`;
}

let interval = setInterval(autoScroll, 50);

logosContainer.addEventListener("mouseenter", () => clearInterval(interval));
logosContainer.addEventListener("mouseleave", () => {
  interval = setInterval(autoScroll, 50);
});


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



