import { Concessionaria } from './Concessionaria';
import { Carro } from './Carro';
import Moto from './Moto'

let carro = new Carro('velox', 3)
carro.acelerar()

let moto = new Moto();
moto.acelerar()

let concessionaria = new Concessionaria('', [])

console.log(moto);
console.log(carro);
console. log(concessionaria.fornecerHorariosDeFuncionamento())