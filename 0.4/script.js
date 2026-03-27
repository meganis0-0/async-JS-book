// 1 Находим нужные элементы на странице по их ID и сохраняем в переменные
const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");
const themeButton = document.getElementById("themeBtn");
const body = document.body;
// 2 Создаем функцию для обновления времени и даты
function updateDateTime() {
  // Получаем текущую дату и время
  const now = new Date();
  // Форматируем время: Часы, Минуты, Секунды (добавляем ноль спереди если число меньше 10)
  const timeString = now.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  // Форматируем дату: День недели, число, месяц
  const dateString = now.toLocaleDateString("ru-RU", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  // Вставляем отформатированные строки в наши HTML-элементы
  timeElement.textContent = timeString;
  dateElement.textContent = dateString;
}
// 3 Создаем функцию для переключения темы
function toggleTheme() {
  // Переключаем (добавляем или убираем) класс .dark-theme у тега <body>
  body.classList.toggle("dark-theme");
  // Меняем текст на кнопке в зависимости от текущей темы
  if (body.classList.contains("dark-theme")) {
    themeButton.textContent = "☀ Дневной режим";
  } else {
    themeButton.textContent = " Ночной режим";
  }
}
// 4 Назначаем обработчики событий
// Обновляем время сразу при загрузке страницы
updateDateTime();
// ...и затем обновляем его каждую секунду (1000 миллисекунд)
setInterval(updateDateTime, 1000);
// Назначаем функцию toggleTheme на клик по кнопке
themeButton.addEventListener("click", toggleTheme);
