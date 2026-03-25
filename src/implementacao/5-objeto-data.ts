function criaObjeto(data: string) {
    const [dia, mes, ano] = data.split('/');

    return{
        dia: Number(dia),
        mes: Number(mes),
        ano: Number(ano)


    }
    
}
module.exports = criaObjeto;

console.log(criaObjeto('09/07/1989'));