"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Dao_1 = require("./Dao");
var Concessionaria_1 = require("./Concessionaria");
var Pessoa_1 = __importDefault(require("./Pessoa"));
var concessionaria = new Concessionaria_1.Concessionaria('', []);
var pessoa = new Pessoa_1.default('', '');
var dao3 = new Dao_1.Dao();
