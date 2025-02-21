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