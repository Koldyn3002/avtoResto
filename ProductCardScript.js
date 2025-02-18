// Получаем все миниатюры
const thumbnails = document.querySelectorAll('.thumbnails .thumbnail');

// Для каждой миниатюры добавляем обработчик события
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        // Находим элемент с классом main-image
        const mainImage = document.getElementById('mainImage');
        // Меняем src у mainImage на соответствующий data-main-img
        mainImage.src = this.getAttribute('data-main-img');
    });
});


window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('shrunk');
    } else {
      header.classList.remove('shrunk');
    }
  });
  console.log('Файл secondPage.js загружен');
