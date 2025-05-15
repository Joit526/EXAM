document.addEventListener('DOMContentLoaded', function() {
  // Находим форму по id
  const form = document.getElementById('surveyForm');

  form.addEventListener('submit', function(e) {
    // Собираем данные формы
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const comments = document.getElementById('comments').value.trim();
    
    let errors = [];

    // Проверка: поле "Имя" не должно быть пустым.
    if (name === '') {
      errors.push('Имя обязательно для заполнения.');
    }

    // Проверка: поле "E-mail" не должно быть пустым.
    if (email === '' || !email.includes ("@")) {
      errors.push('Email обязателен для заполнения и должен содержать "@".');
    } else {
      // Проверка формата email — простой регулярное выражение
      const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegEx.test(email)) {
        errors.push('Введите корректный email-адрес.');
      }
    }

    // Проверка: если комментарий введён, то он должен содержать минимум 10 символов
    if (comments.length < 10) {
      errors.push('Комментарий должен содержать минимум 10 символов.');
    }

    // Если есть ошибки, предотвращаем отправку формы и выводим их
    if (errors.length > 0) {
      e.preventDefault(); // Отменяем отправку формы
      alert(errors.join('\n'));
    } else {
      // Если ошибок нет, можно отобразить сообщение об успешной отправке
      // и (при желании) очистить форму или выполнить дополнительные действия.
      // В данном примере форма отправится на submit.php.
      alert('Форма успешно отправлена!');
    }
  });
});