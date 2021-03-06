export default class Dice {
  constructor(scoreCount, rolls, p1Turn, p2Turn, p1Total, p2Total, diceRoll) {
  this.scoreCount = scoreCount;
  this.rolls = rolls;
  this.p1Turn = p1Turn;
  this.p2Turn = p2Turn;
  this.p1Total = p1Total;
  this.p2Total = p2Total;
  this.diceRoll = diceRoll;
}

  diceRollFunction = function() {
    this.diceRoll = Math.floor(Math.random() * 6 ) + 1;
    return this.diceRoll;
  }

  diceCount = function() {
    console.log(this.diceRoll);
    if (this.diceRoll === 1) { 
      this.scoreCount = 0;
      this.rolls = [];
      this.p1Turn = !this.p1Turn;
      this.p2Turn = !this.p2Turn;
    } else if (this.diceRoll !== 1) {
      if (this.p1Turn === true) {
        this.scoreCount += this.diceRoll;
        this.rolls.push(this.diceRoll);
      } else {
        this.scoreCount += this.diceRoll;
        this.rolls.push(this.diceRoll);
      }
      console.log(this);
      console.log(this.scoreCount);
      this.winCondition();
    }
  }

  winCondition = function () {
    if (this.p1Total + this.scoreCount >= 100) {
      this.p1Total += this.scoreCount;
      console.log("Player 1 Wins!");
      // $("#outcome").text("Player One Wins!");
      // $(".container").hide();
    } else if (this.p2Total + this.scoreCount >= 100) {
      this.p2Total += this.scoreCount;
      console.log("Player 2 Wins!");
      // $("#outcome").text("Player Two Wins!");
      // $(".container").hide();
    } else {
      console.log("Keep playing!");
    }
  }

  hold = function() {
    if (this.p1Turn === true) {
      this.p1Total += this.scoreCount;
    } else {  
      this.p2Total += this.scoreCount;
    }
    this.p1Turn = !this.p1Turn;
    this.p2Turn = !this.p2Turn;
    this.rolls = [];
    this.scoreCount = 0;
  }
}

