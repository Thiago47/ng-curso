"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.qualquer_coisa = exports.Carro = void 0;
var Veiculo_1 = require("./Veiculo");
//export utilizado quando criamos módulos, para exporta para fora
//extends Veiculo significa que carro vai ser uma extensão de Veiculo(PAI)
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    //private velocidade: number = 0 //agora vem por herança
    //constructor receber os parametros do objeto(carroA)
    function Carro(modelo, numeroDePortas) {
        var _this = _super.call(this) //por causa do extends Veiculo
         || this;
        _this.modelo = modelo;
        _this.numeroDePortas = numeroDePortas;
        return _this;
    }
    return Carro;
}(Veiculo_1.Veiculo));
exports.Carro = Carro;
//Dentro do mesmo script pode ter mais de um export
exports.qualquer_coisa = 'teste';
