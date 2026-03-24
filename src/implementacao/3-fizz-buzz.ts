function fizzBuzz(numero: number) {

    let div = numero % 3 == 0 ? "Fizz" : numero % 5 == 0 ? "Buzz" : numero % 3 == 0 && numero % 5 == 0 ? "FizzBuzz" : numero.toString();
    return div;
}

let a = 15;

console.log(fizzBuzz(a));
