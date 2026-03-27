// БЛОКИРУЮЩАЯ версия
function blockingImageProcessing(images) {
  console.log(" БЛОКИРУЮЩАЯ обработка изображений...");
  const processed = [];
  for (let image of images) {
    // Имитация обработки изображения
    const start = Date.now();
    while (Date.now() - start < 100) {
      // Обработка одного изображения - 100ms
    }
    processed.push(`обработано: ${image}`);
  }
  return processed;
}
// НЕБЛОКИРУЮЩАЯ версия (упрощенная имитация)
function nonBlockingImageProcessing(images, callback) {
  console.log(" НЕБЛОКИРУЮЩАЯ обработка изображений...");
  let processed = [];
  let index = 0;
  function processNext() {
    if (index >= images.length) {
      callback(processed);
      return;
    }
    // Имитация асинхронной обработки
    setTimeout(() => {
      processed.push(`обработано: ${images[index]}`);
      index++;
      processNext();
    }, 100);
  }
  processNext();
}
// Тестируем обе версии
const testImages = ["img1.jpg", "img2.jpg", "img3.jpg"];
console.log(" ТЕСТ 1: Блокирующая версия");
// blockingImageProcessing(testImages); // Заблокирует интерфейс
console.log(" ТЕСТ 2: Неблокирующая версия");
nonBlockingImageProcessing(testImages, (result) => {
  console.log(" Неблокирующая обработка завершена:", result);
});
console.log(" Интерфейс остаётся отзывчивым во время неблокирующей обработки!");
