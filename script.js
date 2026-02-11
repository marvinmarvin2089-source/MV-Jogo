const result = document.querySelector('.result')

const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanchoice) => {
    console.log(humanchoice)

    playTheGame(humanchoice, playMachine())

}

const playMachine = () => {
    const choices = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3)
    
    return choices[randomNumber]

}

const playTheGame = (human, machine) => {
    
    console.log('Human: ' + human + ' Maquina: ' + machine)

    if(human === machine){
        result.innerHTML = 'Deu Empate!🙂😉'
    } else if((human === 'rock' && machine === 'scissors') || (human === 'paper' && machine === 'rock') || (human === 'scissors' && machine === 'paper')){
        
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        
        result.innerHTML = 'Você Ganhou!😄👏 Parabéns!💐' 
    } else {
        
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        
        result.innerHTML = 'Você perdeu para a Alexa!🥺😢😭 Que Pena!'
    }


}