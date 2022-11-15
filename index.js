let sum=0
let cards=[]
let message =""
let messageEl=document.getElementById("message")
let sumEl=document.getElementById("sum")
let cardEl=document.getElementById("cards")
let hasBlackJack = false 
let isAlive = true
let startingGame = false

let player = {
    name:"Ramazan",
    money: 1000
}

let playerEl=document.getElementById("player")
playerEl.textContent=player.name+": $" +player.money

function getRandomValue() {
    let randomNumber=Math.floor(Math.random()*11)+1
    if (randomNumber===1){
        randomNumber = 11
    } else if (randomNumber>11 && randomNumber<13){
        randomNumber = 10
    }
    return randomNumber
}

function startGame() {
    isAlive=true
    hasBlackJack=false
    let firstCard=getRandomValue()
    let secondCard=getRandomValue()
    cards = [firstCard, secondCard]
    sum=firstCard+secondCard
    renderGame()
}

function renderGame() {
    startingGame=true
    cardEl.textContent="Cards: "
    for (let i=0; i<cards.length; i++){
        cardEl.textContent+=cards[i]+" "
    }
    sumEl.textContent="Sum: "+sum
    if (sum<=20) {
        message="Do you want to draw a new card?"
        } else if (sum===21){
            message="WohOo! You have got Blackjack!!!"
            hasBlackJack=true
        } else {
            message="You are out of the game!"
            isAlive = false
        }
    messageEl.textContent=message
    }

function newCard() {
    if (isAlive===true && hasBlackJack===false && startingGame===true){
        let thirdCard=getRandomValue()
        sum=sum+thirdCard
        cards.push(thirdCard)
        renderGame()
    }
}