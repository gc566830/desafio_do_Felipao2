let nivel = " ";
let ranqueada = media(32, 10);

function media(vitorias, derrotas){
    let resultado = vitorias - derrotas
    return resultado
}

if(ranqueada >= 21 || ranqueada < 50 ){
    nivel = "Prata"
    console.log("O Heroi tem de saldo de:"+ ranqueada + "e esta no nivel:"+ nivel)
}else if(ranqueada <= 10){
    nivel = "Ferro"
    console.log("O Heroi tem de saldo de:"+ ranqueada + "e esta no nivel:"+ nivel)
}else if(ranqueada >= 11 || ranqueada < 20){
    nivel = "Bronze"
    console.log("O Heroi tem de saldo de:"+ ranqueada + "e esta no nivel:"+ nivel)
}else if(ranqueada >= 51 || ranqueada < 80){
    nivel = "Ouro"
    console.log("O Heroi tem de saldo de:"+ ranqueada + "e esta no nivel:"+ nivel)
}else if(ranqueada >= 81 || ranqueada < 90){
    nivel = "Diamante"
    console.log("O Heroi tem de saldo de:"+ ranqueada + "e esta no nivel:"+ nivel)
}else if(ranqueada >= 91 || ranqueada < 100){
    nivel = "Lendario"
    console.log("O Heroi tem de saldo de:"+ ranqueada + "e esta no nivel:"+ nivel)
}else if(ranqueada >= 101){
    nivel = "Imortal"
    console.log("O Heroi tem de saldo de:"+ ranqueada + "e esta no nivel:"+ nivel)
}

