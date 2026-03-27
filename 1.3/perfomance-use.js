function analyzeBlockingBehavior() {
  console.log(" Анализ поведения блокировки...");
  // Маркер начала
  performance.mark("blocking-start");
  // Имитация блокирующей операции
  const results = [];
  for (let i = 0; i < 5000000; i++) {
    results.push({
      id: i,
      value: Math.sin(i) * Math.cos(i),
      processed: Math.sqrt(i * 1000),
    });
  }
  // Маркер конца
  performance.mark("blocking-end");
  // Измерение длительности
  performance.measure("blocking-duration", "blocking-start", "blocking-end");
  const measures = performance.getEntriesByName("blocking-duration");
  const duration = measures[0].duration;
  console.log(` Длительность блокировки: ${duration.toFixed(2)}ms`);
  if (duration > 50) {
    console.warn(" КРИТИЧЕСКАЯ БЛОКИРОВКА!");
    console.warn(" Пользовательский интерфейс был заблокирован");
  }
}
// Запускаем анализ
analyzeBlockingBehavior();
