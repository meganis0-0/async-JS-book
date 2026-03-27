function performanceExercise() {
  console.log(" Упражнение: Сравнение времени выполнения");
  // Тест 1: Простая операция
  console.time("Простая операция");
  const simple = Array.from({ length: 1000 }, (_, i) => i * 2);
  console.timeEnd("Простая операция");
  // Тест 2: Сложная операция
  console.time("Сложная операция");
  let complex = 0;
  for (let i = 0; i < 1000000; i++) {
    complex += Math.sqrt(i) * Math.sin(i);
  }
  console.timeEnd("Сложная операция");
  // Вопрос: Какая операция может вызвать блокировку?
}
performanceExercise();
