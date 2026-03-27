console.log(" Начинаем сложные вычисления...");
// Моделируем тяжелую операцию (например, обработку изображения)
function heavyOperation(operationName, duration) {
  console.log(` Начало: ${operationName}`);
  // Имитация долгой работы
  const start = Date.now();
  while (Date.now() - start < duration) {
    // Просто ждём
  }
  console.log(` Завершено: ${operationName}`);
  return `Результат ${operationName}`;
}
// Эти операции БЛОКИРУЮТ выполнение всего остального
const photo1 = heavyOperation("Обработка фото 1", 2000);
const photo2 = heavyOperation("Обработка фото 2", 1500);
const photo3 = heavyOperation("Обработка фото 3", 1000);
console.log(" Все операции завершены!");