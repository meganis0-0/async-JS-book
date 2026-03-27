function safeDivision(a, b) {
  console.log(` Деление ${a} / ${b}`);
  // Проверка деления на ноль
  if (b === 0) {
    throw new Error("ОШИБКА: Деление на ноль!");
  }
  return a / b;
}
function calculateAverage(numbers) {
  console.log(" Вычисление среднего значения");
  const sum = numbers.reduce((total, num) => total + num, 0);
  const average = safeDivision(sum, numbers.length);
  return average;
}
function processData(dataSet) {
  console.log(" Обработка набора данных");
  try {
    const avg = calculateAverage(dataSet);
    console.log(` Среднее значение: ${avg}`);
    return avg;
  } catch (error) {
    console.log(` Ошибка в processData: ${error.message}`);
    return null;
  }
}
// Тестируем разные сценарии
console.log(" Тест 1 - Нормальные данные:");
processData([10, 20, 30]); // ← Работает нормально
console.log("\n Тест 2 - Ошибочные данные:");
processData([]); // ← Вызовет ошибку деления на ноль
