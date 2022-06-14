const readline = require('readline-sync');

const randomNumber = () => {
  let chooseNumber = readline.questionInt('Escolha um número de 0 a 10: ');
  const randomNum =  (Math.random() * 10).toFixed(0);
  const luckyNumber = Number(randomNum);
  if (chooseNumber === luckyNumber) {
    console.log("Parabéns, número correto!");
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${luckyNumber}.`);
  }
  const playAgain = readline.question("Deseja jogar novamente (sim / nao)? ");
  playAgain === 'sim' ? randomNumber() : console.log('OK. O Jogo terminou!');
}
randomNumber();