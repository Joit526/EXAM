let count = 0;
const cartButtons = document.querySelectorAll('.button');
const cartCounter = document.getElementById("cartCounter");
cartButtons.forEach(button => {
  button.addEventListener('click', function () {
    button.textContent = 'Добавлено в корзину';
    button.disabled = true; // (по желанию) отключаем кнопку после клика
    
    count++;
    cartCounter.textContent = "Товаров в корзине: " + count;
  });
});