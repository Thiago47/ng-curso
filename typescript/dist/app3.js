"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = require("./Concessionaria");
var Carro_1 = require("./Carro");
var Moto_1 = __importDefault(require("./Moto"));
var carro = new Carro_1.Carro('velox', 3);
carro.acelerar();
var moto = new Moto_1.default();
moto.acelerar();
var concessionaria = new Concessionaria_1.Concessionaria('', []);
console.log(moto);
console.log(carro);
console.log(concessionaria.fornecerHorariosDeFuncionamento());
