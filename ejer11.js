function factorialCalculator(num){
    let result = 1;
    for(let i = 1; i <= num; i++){
        result *= i;
    }
    return `Factorial of ${num} is ${result}`;
}

const resultMsg = factorialCalculator(5);
console.log(resultMsg);
