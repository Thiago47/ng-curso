"use strict";
/* ======================= Classe foi modularizados =================
//class é um recurso(features) do es6 (alguns navegadores não suporta) - para isso ts faz a transformação para js puro de maneira a suporta
class Carro {
    // ======= Atributos =============
    //Private: A única classe que tem acesso ao atributo é a própria classe que o define
    private modelo: string
    private numeroDePortas: number
    private velocidade: number = 0

    //constructor receber os parametros do objeto(carroA)
    constructor(modelo: string, numeroDePortas: number){
        this.modelo = modelo
        this. numeroDePortas = numeroDePortas
    }

    // ========= Método ==============
    //public: todos tem acesso
    public acelerar(): void {
        this.velocidade = this.velocidade + 10
    }
    //void significa que a função não tem retorno (return)
    public parar(): void{
        this.velocidade = 0
    }
    //
    public velocidadeAtual(): number{
        return this.velocidade
    }
}*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** =================== anotação da classe Carro para objeto ================================
//Aqui estou instanciado(new) a classe carro(Carro()) a um objeto(carroA)
let carroA = new Carro('BMW', 4)
//'BMW' é um parametro colocado dentro do objeto, que vai ser recebido pelo constructor()
//4 é outro parametro colocado dentro do objeto

console.log(carroA)
carroA.acelerar()//Aqui estou chamando o método acelerar() para o objeto carroA
console.log(carroA)
 */
/* =============================== Classe foi modularizados =======================================
class Concessionaria {
    private endereco: string
    private listaDeCarros: Array<Carro>

    constructor(endereco: string, listaDeCarro: Carro[]){
        this.endereco = endereco
        this.listaDeCarros = listaDeCarro
    }

    public fornecerEndereco(): string{
        return this.endereco
    }
    public mostrarListaDeCarro(): Array<Carro>{
        return this.listaDeCarros
    }
}
//let concessionaria = new Concessionaria('Av. Paulista')
*/
/* =============================== Classe foi modularizados =======================================
class Pessoa {
    private nome: string
    private carroPreferido: string
    private carro: any //any não válida o tipo da váriavel //carro: Carro

    constructor(nome: string, carroPreferido: string){
        this.nome = nome
        this.carroPreferido = carroPreferido
    }

    public dizerNome(): string{
        return this.nome
    }
    public dizerCarroPreferido(): string{
        return this.carroPreferido
    }
    public comprarCarro(carro: Carro): void{
        this.carro = carro
    }
    public dizerCarroQueTem(): Carro{
        return this.carro
    }
}*/
/**
let pessoa = new Pessoa('José', 'Dogde')
//para dizer qual é o carro preferido
console.log(pessoa.dizerCarroPreferido())
 */
//============================= importa módulos externos =========================================//
var Carro_1 = require("./Carro");
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = require("./Concessionaria");
//{classe definida no outro arquivo} from 'caminho do arquivo'
//fora de {} é uma importação default que nem Pessoa
// ================= criar carro ================================= //
var carroA = new Carro_1.Carro('velox', 4);
var carroB = new Carro_1.Carro('CJ', 4);
var carroC = new Carro_1.Carro('H4', 2);
// =========== Montar a lista de carros da concessionaria (Array)===============//
var listaDeCarros = [carroA, carroB, carroC];
// ========== Passa a lista de carros para objeto =============== //
var concessionaria = new Concessionaria_1.Concessionaria('Av. Paulista', listaDeCarros);
// testes para exibir a lista de carros no método
//console.log(concessionaria.mostrarListaDeCarro())
// ============= comprar o carro ============//
var cliente = new Pessoa_1.default('João', 'velox');
//váriavel do tipo Array receber vários métodos e propriedades assim como map que é método(MAP é um laço dentro de cada posição do array)
//map((função de callback))
concessionaria.mostrarListaDeCarro().map(function (carro) {
    //Comparar uma informação no objeto carro com o objeto cliente na classe Pessoa
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //Comprar carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
