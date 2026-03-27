function processLargeDataset(data) {
  console.log(` Обработка массива из ${data.length} элементов...`);
  // Тяжелые операции с данными
  const processed = data.map((item) => ({
    ...item,
    score: complexScoringAlgorithm(item),
  }));
  // Сортировка большого массива
  processed.sort((a, b) => b.score - a.score);
  console.log(" Обработка завершена");
  return processed;
}
function complexScoringAlgorithm(item) {
  // Имитация сложного алгоритма оценки
  let score = 0;
  for (let i = 0; i < 1000; i++) {
    score += Math.sqrt(item.value * i) / Math.log(i + 2);
  }
  return score;
}
// Использование с большим набором данных
const bigData = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  value: Math.random() * 1000,
}));
console.log(" ОПАСНО: обработка больших данных может заблокировать интерфейс!");
processLargeDataset(bigData);
