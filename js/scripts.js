function Dice() {
  this.scoreCount = 0;
}

Dice.prototype.diceRoll = function() {
  let diceRoll =  Math.floor(Math.random() * 6 ) + 1;
  return diceRoll;
}

let newDice = new Dice

Dice.prototype.diceCount = function() {
  this.scoreCount +=1;
}


// function gameScore() {
//   this.playerOne 
// }
