// Функция для измерения времени выполнения
function measurePerformance(operationName, operation) {
  console.log(` Замер производительности: ${operationName}`);
  const startTime = performance.now();
  const result = operation();
  const endTime = performance.now();
  const duration = endTime - startTime;
  console.log(` ${operationName} заняло: ${duration.toFixed(2)}ms`);
  // Предупреждение о потенциальной блокировке
  if (duration > 100) {
    console.warn(` ВНИМАНИЕ: ${operationName} выполняется $
{duration.toFixed(2)}ms`);
    console.warn(" Это может блокировать пользовательский интерфейс!");
  }
  return result;
}
// Тестируем разные операции
measurePerformance("Быстрая операция", () => {
  return Array.from({ length: 100 }, (_, i) => i * 2);
});
measurePerformance("Медленная операция", () => {
  let sum = 0;
  for (let i = 0; i < 10000000; i++) {
    sum += Math.sqrt(i);
  }
  return sum;
});
