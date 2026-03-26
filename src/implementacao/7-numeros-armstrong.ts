function numerosArmstrong(numero: number) : string {
    const numStr: string = String(numero);
    const quantidadeAlg: number = numStr.length;

    let soma: number = 0
    
    for (let index = 0; index < quantidadeAlg; index++) {
        const alg: number = Number(numStr[index])

        const potencia: number = alg** quantidadeAlg;

        soma = soma + potencia;
    }

    if (soma == numero) {
        return `${numero} é um número de Armstrong`
    } else {
        return `${numero} não é um número de Armstrong`
    }

}
module.exports = numerosArmstrong;

console.log(numerosArmstrong(153));
console.log(numerosArmstrong(156));
