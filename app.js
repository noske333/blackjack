
let cards = []
let dealerCards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let sum = 0
let dealerSums = 0
let bonusCard =getRandomNum()
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let dealerEl = document.getElementById("dealer-el")
let dealerSum = document.getElementById("dealer-sum")


function startGame(){
    let firstCard = getRandomNum()
    let secondCard = getRandomNum()
    let thirdCard = getRandomNum()
    let fourthCard = getRandomNum()
    cards = [firstCard, secondCard]
    dealerCards = [thirdCard, fourthCard, bonusCard]
    isAlive = true
    sum = firstCard + secondCard
    dealerSums = thirdCard + fourthCard
    winLose.textContent = "Good Luck"
    
    renderGame()
}

function stayBtn(){
    if(dealerSums < 17){
        message= "Dealer takes another card"
        dealerSum.textContent = dealerSums += bonusCard
        }

    else if (sum > dealerSums && sum < 22){
        message = "You Win!"
    }else if(dealerSums > 21 || sum === 21){
        message = "You Win"}
    
    else{
        message ="You suck!"
    }
        winLose.textContent = message
    
}


function getRandomNum(){
    let randomNum = Math.floor(Math.random() * 12) + 1 
    if (randomNum > 10){
        return 10
    }else if (randomNum === 1){
        return 11
    } else{
        return randomNum
    }
    
}



function renderGame(){
    dealerEl.textContent  = "Dealer Cards: " 
    for (i = 0; i < dealerCards.length; i ++){
        dealerEl.textContent += dealerCards[i] + " - "
    }

  dealerSum.textContent = "Sum: " + dealerSums

  cardsEl.textContent  = "Cards: " 
    for (i = 0; i < cards.length; i ++){
        cardsEl.textContent += cards[i] + " - "
    }
  sumEl.textContent = "Sum: " + sum
  
if (sum < 21){
  message = "Do you want to draw another card?"
  
} else if (sum === 21){
  message = "Congratualtions on Black Jack!"
  hasBlackJack= true
} else {
  message = "You bust, bitch"
  winLose.textContent = "You Suck!"
  isAlive = false
}

messageEl.textContent = message
}

function hitMe(){
    if (isAlive === true && hasBlackJack === false){
    let thirdCard = getRandomNum()
    sum += thirdCard
    cards.push(thirdCard)
    renderGame()
        }
    }

