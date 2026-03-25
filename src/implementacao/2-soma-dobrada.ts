/* function somaDobrada(umValor: number, outroValor: number) {
    return null;
}
module.exports = somaDobrada;
 */


function somaDobrada(umValor: number, outroValor: number) : number{
    let soma: number = umValor + outroValor;
    let valorFinal: number = umValor == outroValor ? soma * 2 : umValor < 1 || outroValor < 1 ? -1 : soma;
    return valorFinal;
}
module.exports = somaDobrada;

let valo1: number = 5;
let valor2: number = 5;

console.log(somaDobrada(valo1, valor2));


