// Проанализируйте, какой код может вызвать блокировку
function exercise1() {
  const data = Array.from({ length: 1000000 }, (_, i) => i);
  // Вариант A - потенциально блокирующий?
  const resultA = data.map((x) => x * 2).filter((x) => x > 1000);
  // Вариант B - потенциально блокирующий?
  let resultB = 0;
  for (let i = 0; i < data.length; i++) {
    resultB += Math.sqrt(data[i]) * Math.log(data[i] + 1);
  }
  // Вариант C - потенциально блокирующий?
  data.sort((a, b) => {
    const complexA = (a * Math.sin(a)) / Math.cos(a);
    const complexB = (b * Math.sin(b)) / Math.cos(b);
    return complexB - complexA;
  });
  return { resultA, resultB, sorted: data };
}
// Вопрос: Какие операции могут заблокировать интерфейс и почему?
