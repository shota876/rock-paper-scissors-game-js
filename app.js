let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
}

updateScoreElement()

// if(!score){
//   score = {
//     wins: 0,
//     losses: 0,
//     ties: 0
//   }
// }


let isAutoPlaying = false
let intervalId

const rockBtnEl = document.querySelector('.js-rock-btn').addEventListener('click', () =>{
    playGame('rock')
})

const papperBtnEl = document.querySelector('.js-papper-btn').addEventListener('click', () =>{
  playGame('papper')
})

const scissorsBtnEl = document.querySelector('.js-scissors-btn').addEventListener('click', () =>{
  playGame('scissors')
})

document.body.addEventListener('keydown',(event) => {
  if(event.key === 'r'){
    playGame('rock')
  }else if(event.key === 'p'){
    playGame('papper')
  }else if(event.key === 's'){
    playGame('scissors')
  }
})

function autoPlay(){
  if(!isAutoPlaying){
    intervalId = setInterval(function(){
    const playerMove = pickComputerMove()
    playGame(playerMove)
  }, 1000)
  isAutoPlaying = true
  } else{
    clearInterval(intervalId)
    isAutoPlaying = false
  }
  
}

function pickComputerMove(){
    const randomNumber = Math.random()
    let computerMove = ''
   if(randomNumber >= 0 &&  randomNumber < 1 / 3){
     computerMove = 'rock'
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'papper'
  } else if (randomNumber >= 2 / 3 && randomNumber < 1){
    computerMove = 'scissors'
  }
  return computerMove
}

function playGame(playerMove){
    const computerMove = pickComputerMove()
    let result = ''

if (playerMove === 'scissors'){
    if(computerMove === 'rock'){
        result = 'you lose'
      }else if(computerMove === 'papper'){
        result = 'you win'
      }else if(computerMove === 'scissors'){
        result = 'tie'
  }
}else if(playerMove === 'papper'){
    if(computerMove === 'rock'){
        result = 'you win'
      }else if(computerMove === 'papper'){
        result = 'tie'
      }else if(computerMove === 'scissors'){
        result = 'you lose'
      }
}else if(playerMove === 'rock'){
    if(computerMove === 'rock'){
        result = 'tie'
      }else if(computerMove === 'papper'){
        result = 'you lose'
      }else if(computerMove === 'scissors'){
        result = 'you win'
      }
}

  if(result === 'you win'){
    score.wins += 1
  }else if(result === 'you lose'){
    score.losses +=1
  }else if(result === 'tie'){
    score.ties +=1
  }

  localStorage.setItem('score', JSON.stringify(score))

  updateScoreElement()

  document.querySelector('.js-result').innerHTML = result
  document.querySelector('.js-moves').innerHTML = `you ${playerMove} - ${computerMove} computer`

//  alert(`you picked ${playerMove}. computer picked ${computerMove}. ${result}
//  wins: ${score.wins}, losses ${score.losses}, ties: ${score.ties}`)
}

function updateScoreElement(){
  document.querySelector('.js-score').innerHTML =  `wins: ${score.wins}, losses ${score.losses}, ties: ${score.ties}`
}






// function rockMake(){
//     const randomNumber = Math.random()
//     let computerMove = ''

//   if(randomNumber >= 0 &&  randomNumber < 1 / 3){
//     computerMove = 'rock'
//   } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
//     computerMove = 'papper'
//   } else if (randomNumber >= 2 / 3 && randomNumber < 1){
//     computerMove = 'scissors'
//   }
  
//   let result = ''
//   if(computerMove === 'rock'){
//     result = 'tie'
//   }else if(computerMove === 'papper'){
//     result = 'you lose'
//   }else if(computerMove === 'scissors'){
//     result = 'you win'
//   }
  
//  alert(`you picked rock. computer picked ${computerMove}. ${result}`)
// }

// function papperMake(){
//     const randomNumber = Math.random()
//     let computerMove = ''

//   if(randomNumber >= 0 &&  randomNumber < 1 / 3){
//     computerMove = 'rock'
//   } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
//     computerMove = 'papper'
//   } else if (randomNumber >= 2 / 3 && randomNumber < 1){
//     computerMove = 'scissors'
//   }

  
//   let result = ''
//   if(computerMove === 'rock'){
//     result = 'you win'
//   }else if(computerMove === 'papper'){
//     result = 'tie'
//   }else if(computerMove === 'scissors'){
//     result = 'you lose'
//   }
  
//  alert(`you picked papper. computer picked ${computerMove}. ${result}`)
// }

// function scissorsMake(){
//     const randomNumber = Math.random()
//     let computerMove = ''

//   if(randomNumber >= 0 &&  randomNumber < 1 / 3){
//     computerMove = 'rock'
//   } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
//     computerMove = 'papper'
//   } else if (randomNumber >= 2 / 3 && randomNumber < 1){
//     computerMove = 'scissors'
//   }
 
  
//   let result = ''
//   if(computerMove === 'rock'){
//     result = 'you lose'
//   }else if(computerMove === 'papper'){
//     result = 'you win'
//   }else if(computerMove === 'scissors'){
//     result = 'tie'
//   }
  
//  alert(`you picked scissors. computer picked ${computerMove}. ${result}`)
// }

