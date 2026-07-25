
function obtenerMayor(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

let resultado1 = obtenerMayor(60, 25);
let resultado2 = obtenerMayor(48, 12);

console.log("El mayor entre 60 y 25 es: " + resultado1);
console.log("El mayor entre 48 y 12 es: " + resultado2);