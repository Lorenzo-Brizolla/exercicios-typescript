/* function somaDobrada(umValor: number, outroValor: number) {
    return null;
}
module.exports = somaDobrada;
 */


function somaDobrada(umValor: number, outroValor: number) {
    let soma = umValor + outroValor;
    let valorFinal = umValor == outroValor ? soma * 2 : umValor < 1 || outroValor < 1 ? -1 : soma;
    return valorFinal;
}
module.exports = somaDobrada;

let a = 5;
let b = 5;

console.log(somaDobrada(a, b));


