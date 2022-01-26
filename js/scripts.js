function Dice() {
  this.scoreCount = 0;
  this.turn = true;
}

Dice.prototype.diceRoll = function() {
  let diceRoll =  Math.floor(Math.random() * 6 ) + 1;
  return diceRoll;
}

let newDice = new Dice

// Dice.prototype.diceCount = function() {
//   this.scoreCount += this.diceRoll();
// }

Dice.prototype.diceCount = function() {
  let myRoll = this.diceRoll();
  console.log(myRoll);
  if (myRoll === 1) {
    this.scoreCount = 0;
    this.turn = false;
    alert('turn over');
  } else if (myRoll !== 1) {
    this.scoreCount += myRoll;
  }
}

Dice.prototype.turnEnd = function(diceRoll) {
  if (this.diceRoll === 1) {
    this.scoreCount === 0;
    this.turn = false;
    alert('turn over');
  }
  this.turn = true;
}
// function gameScore() {
//   this.playerOne 
// }
