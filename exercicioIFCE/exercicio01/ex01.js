/* 1) Desenvolver um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de
três e que se encontram no conjunto dos números de 1 até 500.  */
let soma = 0;

for(let i = 1;i <= 500;i++){
    if((i % 2) != 0){
        if((i % 3) == 0){
            soma += i
        }
    }
}

console.log(soma)