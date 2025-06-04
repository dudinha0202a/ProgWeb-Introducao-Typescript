// === Array e Metódos de Manipulalção ===

let notas: number[] = [6, 7,5,8,5];

//forEach
//iterar sobre elementos de uma coleção
notas.forEach(n => console.log("Nota:", n)); 

//map
//criar um novo array com os resultados da chamada de uma função fornecida
let notasAjustadas = notas.map(n => n + 0.5);

//filter
