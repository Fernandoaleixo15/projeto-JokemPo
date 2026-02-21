// mapear o paragrafo
const result = document.querySelector(".result");
const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");

// pegar a possição inicial no html
let humanScoreNumber = 0;
let machineScoreNumber = 0;
//pegar o click de quando a pessoa clicar pedra papel ou tesoura.
const playHuman = (humanChoice) => {
  playTheGame(humanChoice, playMachine());
};

//pegar o click de quando a alexa clicar pedra papel ou tesoura.
const playMachine = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
};

//pegar a escolha humana e da maquina e jogar.
const playTheGame = (human, machine) => {
  console.log("Humano:" + human + "Maquina:" + machine);

  if (human === machine) {
    //Empate entre humano e maquina.
    result.innerHTML = "Deu Empate!";
    // Vitoria do Humano.
  } else if (
    (human === "paper" && machine === "rock") ||
    (human === "rock" && machine === "scissors") ||
    (human === "scissors" && machine === "paper")
  ) {
    humanScoreNumber++;
    humanScore.innerHTML = humanScoreNumber;
    result.innerHTML = "Você Ganhou!";
    //Vitoria da maquina.
  } else {
    machineScoreNumber++;
    machineScore.innerHTML = machineScoreNumber;
    result.innerHTML = "Você perdeu para a Alexa!";
  }
};
