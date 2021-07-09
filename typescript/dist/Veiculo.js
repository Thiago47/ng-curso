"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
//export utilizado quando criamos módulos, para exporta para fora
var Veiculo = /** @class */ (function () {
    function Veiculo() {
        this.velocidade = 0;
    }
    // ========= Método ==============
    //public: todos tem acesso
    Veiculo.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    //void significa que a função não tem retorno (return)
    Veiculo.prototype.parar = function () {
        this.velocidade = 0;
    };
    //
    Veiculo.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Veiculo;
}());
exports.Veiculo = Veiculo;
