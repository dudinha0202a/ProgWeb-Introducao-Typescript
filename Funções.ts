// === FUNÇÕES ===

//Função Tradicional
function saudacao(nome: string): string {
    return Olá, ${nome} 
}

console.log(saudacao('Camila'));

//Arrow function - função compactada
const soma = (x: number, y: number): number => x + y;
console.log('Soma:', soma(2,3))

//Função com valor padrão
function mensagem(texto: string = 'Bemvindo(a)!'): void{
    console.log(texto);
}

//Função parâmetro opcional
function apresentar(nome?: string){
    if(nome){
        console.log(Olá, ${nome});
    }
    else{
        console.log(Olá Visitante);
    }
}