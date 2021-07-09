import { Veiculo } from './Veiculo';

class Moto extends Veiculo{
    //Aqui estou sobre escrevendo o método PAI
    public acelerar(): void {
        this.velocidade = this.velocidade + 20
    }
}

//Exportação pode ser usada no final
export default Moto