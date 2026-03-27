console.log("1. Синхронная операция");
setTimeout(() => {
  console.log("4. Таймер 1000ms");
}, 1000);
setTimeout(() => {
  console.log("3. Таймер 0ms");
}, 0);
console.log("2. Синхронная операция");
Promise.resolve().then(() => {
  console.log("Микрозадача - приоритет выше");
});
