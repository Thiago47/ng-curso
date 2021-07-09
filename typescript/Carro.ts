import { Veiculo } from './Veiculo';

//export utilizado quando criamos módulos, para exporta para fora
//extends Veiculo significa que carro vai ser uma extensão de Veiculo(PAI)
export class Carro extends Veiculo{
    // ======= Atributos =============
    //Private: A única classe que tem acesso ao atributo é a própria classe que o define
    //private modelo: string //agora vem por herança
    private numeroDePortas: number
    //private velocidade: number = 0 //agora vem por herança

    //constructor receber os parametros do objeto(carroA)
    constructor(modelo: string, numeroDePortas: number){
        super() //por causa do extends Veiculo
        this.modelo = modelo
        this. numeroDePortas = numeroDePortas
    }

    /* ========= Método ============== //agora vem por herança de Veiculo.ts
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
    }*/
}
//Dentro do mesmo script pode ter mais de um export
export let qualquer_coisa: string = 'teste'