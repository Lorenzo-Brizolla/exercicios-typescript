function fizzBuzz(numero: number) : string {

    let div:string = numero % 3 == 0 && numero % 5 == 0 ? "FizzBuzz" : numero % 3 == 0 ? "Fizz" : numero % 5 == 0 ? "Buzz" : numero.toString();
    return div;
}

let valor: number = 25;

console.log(fizzBuzz(valor));
