const readline = require("readline-sync");
const initialAsk = readline.questionInt(
  `Qual dos scripts deve ser iniciado? (digite o número do script)
  1 - Cálculo do IMC
  2 - Cálculo da velocidade média?
  3 - Jogo do sorteio de números
  ` 
  );

 switch (initialAsk) {
   case 1:
     require("./imc")
     break;
  case 2:
     require("./velocidade")
     break;
  case 3:
     require("./sorteio")
     break;
 
  default:
    require("./imc")
     break;
 }