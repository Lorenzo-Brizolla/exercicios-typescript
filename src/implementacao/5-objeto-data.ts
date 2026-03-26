function criaObjeto(data: string) {
    const [dia, mes, ano] = data.split('/');

    return{dia, mes, ano
    }
    
}
module.exports = criaObjeto;

console.log(criaObjeto('09/07/1989'));
