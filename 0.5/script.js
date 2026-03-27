// Ждем пока вся страница загрузится
document.addEventListener("DOMContentLoaded", function () {
  // Находим кнопку по ID
  const button = document.getElementById("myButton");
  // Добавляем реакцию на клик
  button.addEventListener("click", function () {
    alert("Кнопка нажата! Ура! ");
    // Дополнительный эффект - меняем текст кнопки
    button.textContent = "Спасибо за клик!";
    // Меняем цвет через 2 секунды
    setTimeout(function () {
      button.textContent = "Нажми меня снова";
      button.style.backgroundColor = "green";
    }, 2000);
  });
});
