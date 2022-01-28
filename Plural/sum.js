function sum(a, b) {
  let sum = 0;

  while (a <= b) {
    sum += a;
    a++;
  }

  return sum;
}

console.log(sum(12, 23));