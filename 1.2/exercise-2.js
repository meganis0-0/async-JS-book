function puzzleOne() {
console.log(1);
setTimeout(() => console.log(2), 0);
console.log(3);
}
console.log("Начало упражнения 2:");
puzzleOne();
console.log("Конец упражнения 2:");
// Вопрос: В каком порядке выведутся числа?
