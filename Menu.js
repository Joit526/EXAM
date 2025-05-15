// Функция для переключения темы
function switchTheme() {
  const textThemeLink = document.getElementById("text-theme-link");
  const layoutThemeLink = document.getElementById("layout-theme-link");

  const currentTextTheme = textThemeLink.getAttribute("href");
  const currentLayoutTheme = layoutThemeLink.getAttribute("href");

  // Проверяем, какая тема активна, и меняем на другую
  if (currentTextTheme === "Light-text.css") {
    textThemeLink.setAttribute("href", "dark-text.css"); // Меняем на тёмную тему для текста
  } else {
    textThemeLink.setAttribute("href", "Light-text.css"); // Меняем на светлую тему для текста
  }

  if (currentLayoutTheme === "Light-blocks.css") {
    layoutThemeLink.setAttribute("href", "dark-blocks.css"); // Меняем на тёмную тему для блоков и меню
  } else {
    layoutThemeLink.setAttribute("href", "Light-blocks.css"); // Меняем на светлую тему для блоков и меню
  }
}

// Код для работы с меню
const menuToggle = document.getElementById("menu-toggle");
const sideMenu = document.getElementById("side-menu");

menuToggle.addEventListener("click", () => {
  sideMenu.classList.toggle("open"); // Открываем или закрываем меню
});