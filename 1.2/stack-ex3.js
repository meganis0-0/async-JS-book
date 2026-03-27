// Функция для исследования Call Stack через ошибку
function investigateCallStack() {
  console.log(" Исследуем текущий Call Stack:");
  // Создаём ошибку, чтобы получить трассировку стека
  try {
    throw new Error("Искусственная ошибка для трассировки");
  } catch (error) {
    // Выводим полную трассировку стека
    console.log(" Полная трассировка Call Stack:");
    console.log(error.stack);
  }
}
// Функции для создания многоуровневого стека
function levelThree() {
  console.log(" Уровень 3 - самая глубокая функция");
  investigateCallStack(); // ← Исследуем стек отсюда
}
function levelTwo() {
  console.log(" Уровень 2 - средняя функция");
  levelThree(); // ← Переходим на уровень глубже
}
function levelOne() {
  console.log(" Уровень 1 - начальная функция");
  levelTwo(); // ← Запускаем цепочку вызовов
}
// Запускаем исследование
console.log(" Запуск исследования Call Stack:");
levelOne();
console.log(" Исследование завершено");
