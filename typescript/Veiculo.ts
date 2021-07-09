//export utilizado quando criamos módulos, para exporta para fora
export class Veiculo {
    // ======= Atributos =============
    //Private: A única classe que tem acesso ao atributo é a própria classe que o define
    //Protected: permite acesso às classes filhas, mas proíbe a qualquer outro acesso externo
    protected modelo!: string
    protected velocidade: number = 0


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
}
