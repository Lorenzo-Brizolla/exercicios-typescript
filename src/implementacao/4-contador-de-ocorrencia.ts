function contadorDeOcorrencia(texto: string, letra: string) : number {
    let ocorrencia: number = 0;
    for (let index = 0; index <= texto.length; index++) {
        if (texto[index] === letra){
            ocorrencia = ocorrencia + 1;
        }
        
    }
    return ocorrencia;
}
module.exports = contadorDeOcorrencia;

let texto: string = "lorenzo e Aline";
let letra: string = "l";


console.log(contadorDeOcorrencia(texto, letra));


