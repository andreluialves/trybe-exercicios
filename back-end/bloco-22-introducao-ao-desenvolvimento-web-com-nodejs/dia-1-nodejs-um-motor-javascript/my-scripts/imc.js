const readline = require("readline-sync");
const weight = readline.questionFloat("Qual seu peso? (em kg) ");
const height = readline.questionInt("Qual sua altura? (em cm) ");
const heightInMeters = height / 100;

const imc = (weight, heightInMeters) => {
  const result = (weight / (heightInMeters ** 2)).toFixed(1);
  if (result < 18.5) { console.log("Abaixo do peso (magreza)") };
  if (result >= 18.5 && result <= 24.9) { console.log("Peso normal") };
  if (result >= 25.0 && result <= 29.9) { console.log("Acima do peso (sobrepeso)") };
  if (result >= 30.0 && result <= 34.9) { console.log("Obesidade grau I") };
  if (result >= 35.0 && result <= 39.9) { console.log("Obesidade grau II") };
  if (result >= 40.0) { console.log("Obesidade grau III e IV") };
};

imc(weight, heightInMeters);