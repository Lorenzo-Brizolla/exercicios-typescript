function apuraVotacao(votos: Array<number>) : string {
    let votos1:number = 0;
    let votos2:number = 0;
    let votos3:number = 0;
    for (const voto of votos) {
        if (voto == 1) {
            votos1++;
        } else if (voto == 2) {
            votos2++;
        } else {
            votos3++;
        }
    }
    let maiorVoto = votos1 > votos2 && votos1 > votos3 ? "Vencedor: 1" : votos2 > votos1 && votos2 > votos3 ? "Vencedor: 2" : votos3 > votos1 && votos3 > votos2 ? "Vencedor: 3" : "Empate"
    return maiorVoto;
}
module.exports = apuraVotacao;

let votacao = [1, 1, 2, 2, 3, 3];

console.log(apuraVotacao(votacao));
