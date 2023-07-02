console.log(`Trabalhando com Listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio De Janeiro`;


const listasDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`,
)

// Adicionar um item a lista:
listasDestinos.push(`Manaus`); // o push ele empurra ou seja adiciona um item a lista
console.log ('Possiveis Destinos:');
//console.log (salvador, saoPaulo, rioDeJaneiro);
console.log (listasDestinos);

// Remover um item da lista: Em lista a contagem de itens começa em zero
listasDestinos.splice(1,1)
console.log (listasDestinos);

// Como mostrar apenas um elemento: é preciso adicionar o [] e declarar qual elemento mostrar
console.log (listasDestinos[1]);





