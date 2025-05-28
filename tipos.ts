//===TIPOS EM TYPESCRIPT===

//Tipos primitivos
let texto: string = "Olá mundo!";
let numero: number = 42;
let ativo: boolean = true;

//Arrays
let numeros: number[] = [1, 2, 3, 4, 5] /*primeira forma de criar array*/
let palavras: Array<string> = ['TypeScript', 'é', 'massa!'] /*segunda forma de criar array*/

//Tuplas
let pessoa: [string, number] = ['João', 25]

//Enum
enum Cores {
    Vermelho,
    Verde,
    Rosa
}

let corFavorita: Cores = Cores.Rosa;


//Any (evitar sempre que possível)
let dadoAleatorio: any = 5;
dadoAleatorio = 'Texto';
dadoAleatorio = true;

//Unknow (tipo mais seguro do any)
let dadoDesconhecido: unknown = 10;

//Void
function mostrarAlerta():  void{
    console.log("Atenção! preste atenção na aula.")
}

//Null e undefined
let nada: null = null;
let indefinido: undefined = undefined;

//Never (usado quando a função nunca retorna)
function erroFatal(mensagem:string): never{
    throw new Error(mensagem)
}

//Type aliases
type Usuario = {
    nome: string;
    idade: number;
}

let usuario1: Usuario = {nome:'Maria Eduarda', idade: 17};