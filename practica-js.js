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

// Reto 3:
const productos = [
{ id: 1, nombre: 'Mouse', precio: 50000, categoria: 'Perifericos', stock: 5 },
{ id: 2, nombre: 'Teclado', precio: 90000, categoria: 'Perifericos', stock: 0 },
{ id: 3, nombre: 'Monitor', precio: 650000, categoria: 'Pantallas', stock: 3 },
{ id: 4, nombre: 'Audifonos', precio: 50000, categoria: 'Perifericos', stock: 10 },
{ id: 5, nombre: 'Mouse Pad', precio: 50000, categoria: 'Accsesorios', stock: 20 },
{ id: 6, nombre: 'Microfono', precio: 700000, categoria: 'Perifericos', stock: 3 },
{ id: 7, nombre: 'Camara', precio: 80000, categoria: 'Dispositivos', stock: 5 },
{ id: 8, nombre: 'Trípode', precio: 100000, categoria: 'Accesorios', stock: 0 },
{ id: 9, nombre: 'Consola', precio: 2000000, categoria: 'Entretenimiento', stock: 8 },
{ id: 10, nombre: 'Power Bank', precio: 90000, categoria: 'Accesorios', stock: 7 }
];

//Reto 4
productos.forEach((producto, indice) => {
console.log(`${indice + 1}. ${producto.nombre} - ${producto.precio} - stock:${producto.stock}`);
});

// Reto 5
const nombres = productos.map(producto => producto.nombre);
console.log(nombres);

const preciosConIva = productos.map(producto => producto.precio * 1.19);
console.log(preciosConIva);

const nombresMayuscula = productos.map(producto => producto.nombre.toUpperCase());
console.log(nombresMayuscula);

const resumenProductos = productos.map(producto => `${producto.nombre} cuesta ${producto.precio}`)
console.log(resumenProductos);