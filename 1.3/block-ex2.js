function calculatePrimes(limit) {
  console.log(` Поиск простых чисел до ${limit}...`);
  const primes = [];
  for (let num = 2; num <= limit; num++) {
    let isPrime = true;
    // Проверка на простоту (вычислительно сложно)
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(num);
    }
  }
  console.log(` Найдено ${primes.length} простых чисел`);
  return primes;
}
// Тестируем с разными пределами
console.log(" ТЕСТ 1: Маленькие числа (быстро)");
calculatePrimes(1000);
console.log(" ТЕСТ 2: Большие числа (медленно)");
calculatePrimes(100000); // ← Может заблокировать интерфейс!
