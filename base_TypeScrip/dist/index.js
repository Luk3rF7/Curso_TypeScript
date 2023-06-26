"use strict";
//Tipos Básicos
let age = 5;
const nome = 'Lucas';
const isValid = true;
let idk = 5;
//lista
//caso queira ter array de numeros
const ids = [1, 2, 3, 4, 5];
const booleans = [true, false, true, false];
const names = ['Lucas', 'victoria', 'marcelo'];
//tupla
// e tipo de variavel que tenha determinado valor e ordem
const personagem = [1, "first"];
//lista de tuplas
const people = [
    [1, "firstName"],
    [2, "firstName2"],
    [3, "lastName"],
];
//intersections 
// noome const : string | number 
// | vai dar permisão para ser string ou number
const productId = 2;
//Enum
// ele e bom um valor que atribui outro valor
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["down"] = 2] = "down";
})(Direction || (Direction = {}));
const direction = Direction.up;
console.log(direction);
