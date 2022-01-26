function Dice() {
  this.scoreCount = 0;
  this.turn = true;
}

Dice.prototype.diceRoll = function() {
  let diceRoll =  Math.floor(Math.random() * 6 ) + 1;
  return diceRoll;
}

let newDice = new Dice

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

Dice.prototype.hold = function() {
  this.turn = false;
}

// function gameScore() {
//   this.playerOne 
// }
