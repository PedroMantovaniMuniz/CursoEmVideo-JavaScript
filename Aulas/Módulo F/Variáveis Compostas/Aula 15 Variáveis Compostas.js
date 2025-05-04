let num = [5, 8, 2, 9, 3];
num.push(1); // Adiciona o número 1 como último elemento do vetor
num.sort(); // Ordena o vetor em ordem crescente
console.log(`Nosso vetor é o ${num}`);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[0]}`);
let pos = num.indexOf(8); // Retorna a posição do valor 8 no vetor
if (pos == -1) {
    console.log(`O valor não foi encontrado`);
    return;
}
console.log(`O valor 8 está na posição ${pos}`);
/*
for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}
*/
for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}