console.log("JavaScript listo para practicar");

function calcularTotal(precio, cantidad) {
const total = precio * cantidad;
return total;
}
const resultado = calcularTotal(50000, 3);
console.log(resultado);

// Reto 1:
function sumar(a, b){
    const total = a + b;
    return total;
}

function restar(a, b){
    const total = a - b;
    return total;
}

function multiplicar(a, b){
    const total = a * b;
    return total;
}

function dividir(a, b){
    const total = a / b;
    return total;
}

function calcularPromedio(nota1, nota2, nota3){
    const promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}

console.log(sumar(3, 6))
console.log(restar(6, 3))
console.log(multiplicar(4, 6))
console.log(dividir(100, 5))
console.log(calcularPromedio(5, 5, 5))

// Pregrunta de control:
// La diferencia entre console log() y return radica en que
// console.log() se usa para mostrar información en la consola
// mientras que return devuelve un valor deede una funciona o 
// permite guardar un resultado en una variable o utilizarlo
// después.

// Reto 2:
const aplicarIva = precio => precio * 1.19;
console.log(aplicarIva(2000))

const cuadrado = numero => numero * numero;

const esMayorEdad = edad => edad >= 18;

const nombreCompleto = (nombre, apellido) => `${nombre} ${apellido}`;

console.log(cuadrado(5));
console.log(esMayorEdad(20));
console.log(nombreCompleto("Mariana", "Pérez"));