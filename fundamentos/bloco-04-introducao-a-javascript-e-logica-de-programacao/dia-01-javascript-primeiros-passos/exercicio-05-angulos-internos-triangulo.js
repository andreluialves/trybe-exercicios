/* Faça um programa que defina três constantes com os valores dos três ângulos internos de um 
triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , 
caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. */

// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

const angulo1 = 45;
const angulo2 = 45;
const angulo3 = 90;
const somaAngulos = angulo1 + angulo2 + angulo3;
const condicaoAngulos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if (condicaoAngulos) {
    
    if (somaAngulos === 180) {
        console.log("True");
    } else {
        console.log("False");
    }

} else {
    console.log("Erro: Valor de ângulo inválido.")
}



