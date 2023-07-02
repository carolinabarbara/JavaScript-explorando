console.log(`\n Trabalhando com condicionais`);


const listasDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`,
)

const idadeCoprador = 18;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = 'Curitiba';

console.log ('\n Possiveis Destinos:');
console.log (listasDestinos);

const podeComprar = idadeCoprador >= 18 || estaAcompanhada ==true;

let contador = 0;
let destinoExiste = false; 
while (contador < 3){  
    if (listasDestinos [contador] == destino){    
    
        destinoExiste = true
        break;
    }
        contador +=1;
    }
    console.log('Destino existe: ', destinoExiste);

    if (podeComprar && destinoExiste){
        console.log ('Boa viagem!');
    } else {
        console.log ('Desculpa tivemos um erro!');
    }

    for (let cont = 0; cont < 3; cont ++ ){ 
        // no for eu preciso declarar a varia de inicialização, 
        //o segundo espaço é a condição, e o terceiro é o que ele vai excecutar no final
        if (listasDestinos [contador] == destino){    
        
            destinoExiste = true;
        }
    }
