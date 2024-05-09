function serialize(numbers) {
  let result = "";
  for (let i = 0; i < numbers.length; i++) {
    if (i > 0) {
      result += String.fromCharCode(numbers[i] - numbers[i - 1] + 30);
    } else {
      result += String.fromCharCode(numbers[i] + 30);
    }
  }
  return result;
}

function deserialize(serialized) {
  const numbers = [];
  let currentNumber = 0;
  for (let i = 0; i < serialized.length; i++) {
    const diff = serialized.charCodeAt(i) - 30;
    currentNumber += diff;
    numbers.push(currentNumber);
  }
  return numbers;
}

const tests = [
  [1, 2, 3, 4, 5],
  [100, 200, 300, 400, 500],
  Array.from({ length: 50 }, (_, i) => i + 1),
  Array.from({ length: 100 }, (_, i) => i + 1),
  Array.from({ length: 500 }, (_, i) => i + 1),
  Array.from({ length: 1000 }, (_, i) => i + 1),
  Array.from({ length: 1000 }, () => Math.floor(Math.random() * 100) + 1),
];

tests.forEach((test) => {
  const serialized = serialize(test);
  const compressionRatio = serialized.length / (test.length * 4);
  console.log("Исходный массив:", test);
  console.log("Сериализованная строка:", serialized);
  console.log("Коэффициент сжатия:", compressionRatio.toFixed(2));
  console.log("--------------------------------------");
});
