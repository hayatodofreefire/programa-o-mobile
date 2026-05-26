const input = require("readline-sync");
let nome = input.question("digite seu nome: ");
let idade = number(input.question("digite sua idade: "));
let cidade = input.question("digite sua cidade: ");
console.log("Olá! Meu nome é ${nome}, tenho ${idade} anos e sou de ${cidade}.");