// Проанализируйте порядок выполнения и нарисуйте Call Stack
function exerciseA() {
  console.log("A");
  exerciseB();
  console.log("A завершена");
}
function exerciseB() {
  console.log("B");
  exerciseC();
  console.log("B завершена");
}
function exerciseC() {
  console.log("C");
  console.log("C завершена");
}
console.log("Начало упражнения 1:");
exerciseA();
console.log("Конец упражнения 1:");
