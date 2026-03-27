// Демонстрация принципа LIFO
function firstFunction() {
  console.log(" Первая функция начала работу");
  secondFunction(); // ← Вызываем вторую функцию
  console.log(" Первая функция завершила работу");
}
function secondFunction() {
  console.log(" Вторая функция начала работу");
  thirdFunction(); // ← Вызываем третью функцию
  console.log(" Вторая функция завершила работу");
}
function thirdFunction() {
  console.log(" Третья функция начала работу");
  console.log(" Третья функция завершила работу");
}
// Запускаем выполнение
console.log(" НАЧАЛО ПРОГРАММЫ");
firstFunction();
console.log(" КОНЕЦ ПРОГРАММЫ");
