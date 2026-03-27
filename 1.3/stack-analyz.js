function demonstrateBlockingStack() {
  console.log(" Уровень 1: Начало demonstrateBlockingStack");
  function levelTwo() {
    console.log(" Уровень 2: Начало levelTwo");
    function blockingLevel() {
      console.log(" Уровень 3: BLOCKING OPERATION");
      console.log(" ⚠ Call Stack ЗАБЛОКИРОВАН на 2 секунды!");
      // Блокируем выполнение
      const start = Date.now();
      while (Date.now() - start < 2000) {
        // Ждём 2 секунды
      }
      console.log(" Уровень 3: Блокировка снята");
    }
    blockingLevel(); // ← Вызов блокирующей функции
    console.log(" Уровень 2: Завершение levelTwo");
  }
  levelTwo(); // ← Запускаем цепочку
  console.log(" Уровень 1: Завершение demonstrateBlockingStack");
}
console.log(" ТЕСТ БЛОКИРОВКИ CALL STACK");
demonstrateBlockingStack();
console.log(" Программа завершена");
