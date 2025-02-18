window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('shrunk');
    } else {
      header.classList.remove('shrunk');
    }
  });
  console.log('Файл secondPage.js загружен');
