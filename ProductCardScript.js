// Добавляем обработчик скролла
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const address = document.querySelector('.address');
  
  if (window.scrollY > 100) { // Когда проскроллили больше 100px
    header.classList.add('header-scrolled');
    address.classList.add('address-hidden');
  } else {
    header.classList.remove('header-scrolled');
    address.classList.remove('address-hidden');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const thumbnails = document.querySelectorAll('.thumbnail-list img');
  const mainImage = document.getElementById('mainImage');

  thumbnails.forEach(thumb => {
      thumb.addEventListener('click', function() {
          // Убираем активный класс у всех миниатюр
          thumbnails.forEach(t => t.classList.remove('active'));
          // Добавляем активный класс кликнутой миниатюре
          this.classList.add('active');
          // Меняем основное изображение
          mainImage.src = this.src;
      });
  });
});