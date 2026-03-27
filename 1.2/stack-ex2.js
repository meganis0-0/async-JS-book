function demonstrateStackLevels() {
  const localVar = "локальная переменная";
  console.log(" Уровень 1 - demonstrateStackLevels:");
  console.log(` Локальные: localVar = "${localVar}"`);
  function innerFunction(parameter) {
    const innerVar = "внутренняя переменная";
    console.log(" Уровень 2 - innerFunction:");
    console.log(` Параметр: parameter = "${parameter}"`);
    console.log(` Локальные: innerVar = "${innerVar}"`);
    function deepestFunction() {
      console.log(" Уровень 3 - deepestFunction:");
      console.log(" Это самый глубокий уровень стека!");
    }
    deepestFunction(); // ← Вызов самой глубокой функции
  }
  innerFunction("аргумент"); // ← Вызов внутренней функции
}
// Запускаем демонстрацию
demonstrateStackLevels();
