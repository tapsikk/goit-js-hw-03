function createReversedArray() {
  const args = Array.from(arguments);
  const total = args.reverse();
  return total;
}

const reversedArgs = createReversedArray(12, 85, 37, 4);
console.log(reversedArgs); // Выведет: [4, 37, 85, 12]
