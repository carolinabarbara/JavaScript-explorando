console.log(`Trabalhando com condicionais`);


const listasDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`,
)


const idadeCoprador = 18;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log ('Possiveis Destinos:');
console.log (listasDestinos);

// if (idadeCoprador >= 18) {
//     console.log ('Comprador maior de idade!');
//     listasDestinos.splice(1,1) // Remover um item da lista e adcionando uma condição
// } else if (estaAcompanhada){
//     console.log ('Comprador está acompanhado');
//     listasDestinos.splice(1,1) //removendo item
//     } else {
//     console.log ('Não é maior de idade, não posso vender!');
// }

if (idadeCoprador >= 18 || estaAcompanhada ==true ) { // operador ou é represenatdo por ||
    console.log ('Comprador maior de idade!');
    listasDestinos.splice(2,1) // Remover um item
}   else {
    console.log ('Não é maior de idade, não posso vender!');
}

console.log ('Embarque: \n\n') // O \n no JS pula uma linha
if (idadeCoprador >= 18 && temPassagemComprada){ // operador de e é presentado por &&
    console.log('Boa Viagem!');
} else {
    console.log('Você não pode embarcar!');
}


console.log (listasDestinos);

//Operadores logicos:
//console.log (idadeCoprador > 18);  maior que 18
//console.log (idadeCoprador < 18);  menor que 18
//console.log (idadeCoprador <= 18); maior ou igual a 18
//console.log (idadeCoprador >= 18); menor ou igual a 18
//console.log (idadeCoprador == 18); igual

