console.log("❌ 1 Начало запроса");
fetch("https://api.example.com/data")
  .then((response) => {
    console.log("❌ 4 Ответ получен");
    return response.json();
  })
  .then((data) => {
    console.log("❌ 5 Данные обработаны");
  });
console.log("❌ 2 Запрос отправлен");
console.log("❌ 3 Интерфейс responsive");
