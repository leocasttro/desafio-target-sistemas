function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

function verificaSequenciaFibonacci(num) {
  let i = 0;
  while (true) {
    const fib = fibonacci(i);
    if (fib === num) {
      return `O número ${num} pertence à sequência de Fibonacci.`;
    } else if (fib > num) {
      return `O número ${num} não pertence à sequência de Fibonacci.`;
    }
    i++;
  }
}

// Exemplo de uso:
console.log(verificaSequenciaFibonacci(13)); 
console.log(verificaSequenciaFibonacci(22)); 