/* Faça um programa que retorne o maior de três números. Defina no começo do programa 
três constantes com os valores que serão comparados. */

const a = 8;
const b = 32;
const c = 21;

if (a > b && a > c) {
    console.log("O número maior é " + a);
} else if (b > a && b > c) {
    console.log("O número maior é " + b);
} else {
    console.log("O número maior é " + c);
}