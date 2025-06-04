let a: number = 10;
let b: number = 14;

//Aritméticos (+,-,*,/,%)
console.log('soma', a + b);
console.log('subtração', a - b);
console.log('multipicação', a * b);
console.log('Divisão', a / b);
console.log('Resto', a % b) /*percente*/

//Relacionais
console.log('Igual:', a == b);
console.log('Diferente:', a != b);
console.log('Maior que:', a > b);
console.log('Menor que:', a < b);
console.log('Maior ou igual:', a >= b);
console.log('Menor ou igual:', a <= b);

//Identidade Restrita 
console.log('Idêntico', a === b);
console.log('Não idêntico', a !== b);

//Lógicos
let x: boolean = true;
let y: boolean = false;

console.log('AND', x && y);
console.log('OR', x || y);
console.log('NOT', !x);

//Operador condicional (ternário)
let idade: number = 17;
let acesso = idade >= 18 ? 'Permito beijar na boca' : 'Não permitido' /* condição ? valor se true : valor se false*/