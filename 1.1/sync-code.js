console.log(" Начало синхронной программы");
function stepOne() {
  console.log(" Шаг 1: Загружаем данные пользователя");
  return "Данные пользователя";
}
function stepTwo(previousResult) {
  console.log(` Шаг 2: Обрабатываем ${previousResult}`);
  return "Обработанные данные";
}
function stepThree(previousResult) {
  console.log(` Шаг 3: Сохраняем ${previousResult}`);
  return "Сохранённый результат";
}

// Синхронное выполнение - каждая функция ждёт предыдущую
const result1 = stepOne();
const result2 = stepTwo(result1);
const result3 = stepThree(result2);
console.log(" Конец программы:", result3);
