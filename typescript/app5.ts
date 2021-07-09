import { Dao } from './Dao';
import { Concessionaria } from './Concessionaria';
import Pessoa from './Pessoa';

let concessionaria = new Concessionaria('', []);
let pessoa: Pessoa = new Pessoa('', '');

let dao3: Dao<Concessionaria> = new Dao<Concessionaria>();