const readline = require("readline-sync");
const distance = readline.questionInt("Qual a distância? (em m) ");
const time = readline.questionInt("Qual é o tempo? (em s) ");
const velocity = (distance, time) => {
  const result = (distance / time).toFixed(2);
  console.log(`A velocidade média é de ${result} m/s.`);
}
velocity(distance, time);