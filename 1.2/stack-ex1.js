// Простая программа для визуализации стека
function multiply(a, b) {
  const result = a * b;
  console.log(` Умножение: ${a} * ${b} = ${result}`);
  return result;
}
function calculateTotal(price, quantity) {
  console.log(" Начало calculateTotal");
  const total = multiply(price, quantity); // ← Вызов другой функции
  console.log(` Общая сумма: ${total}`);
  return total;
}
function processOrder(product, price, quantity) {
  console.log(` Обработка заказа: ${product}`);
  const orderTotal = calculateTotal(price, quantity);
  console.log(` Заказ "${product}" обработан`);
  return orderTotal;
}
// Главная функция программы
function main() {
  console.log(" Магазин: начало работы");
  const total = processOrder("Ноутбук", 1000, 2);
  console.log(` Итоговая сумма: ${total}`);
  console.log(" Магазин: завершение работы");
}
// Запускаем программу
main();
