
let sumaTotal = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + " es par");
    } else {
        console.log(i + " es impar");
    }
    sumaTotal += i;
}

console.log("La suma total de los números del 1 al 20 es: " + sumaTotal);