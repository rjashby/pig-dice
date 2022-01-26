function Dice() {
  this.scoreCount = 0;
  this.rolls = [];
  this.p1Turn = true;
  this.p2Turn = false;
  this.p1Total = 0;
  this.p2Total = 0;
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
    this.p1Turn = !this.p1Turn;
    this.p2Turn = !this.p2Turn;
    alert('turn over');
  } else if (myRoll !== 1) {
    this.scoreCount += myRoll;
    this.rolls.push(myRoll);
    console.log(this.rolls);
    console.log(this.scoreCount);
  }
}

Dice.prototype.winCondition = function () {
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  if (this.rolls.reduce(reducer) >= 100) {
    return "You Win!";
  }
  return "Keep Going My Dude!";
}

Dice.prototype.hold = function() {
  this.turn = false;
  let roundScore = this.scoreCount;
  return roundScore;
}

function Game() {
  this.playerOneScore = 0;
  this.playerTwoScore = 0;
}
// function gameScore() {
//   this.playerOne 
// }

// add player swap function

function diceRoll() {
  let roll =Math.floor((Math.random() * 6) + 1);
  return roll;
}

function Player(){
  this.currentScore = 0;
  this.p1TotalScore = 95;
  this.p2TotalScore = 95;
  this.p1 = true;
  this.p2 = false;
}

Player.prototype.roll = function () {
  let roll = diceRoll()
  console.log(roll)
  if (roll != 1){
    this.currentScore += roll;
  } else {
    this.currentScore = 0;
    this.p1 = !this.p1;
    this.p2 = !this.p2;
  }
}

Player.prototype.hold = function() {
  if (this.p1 === true) {
    this.p1TotalScore += this.currentScore;
  } else if (this.p2 === true){
    this.p2TotalScore += this.currentScore;
  }
  this.currentScore = 0;
  this.checkScore();
}

Player.prototype.checkScore = function() {
  if (this.p1TotalScore >= 100) {
    console.log("PLAYER ONE WINS")
  } else if (this.p2TotalScore >= 100) {
    console.log("PLAYER TWO WINS")
  }
}
