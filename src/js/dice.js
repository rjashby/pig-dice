export default class Dice {
  constructor(scoreCount, rolls, p1Turn, p2Turn, p1Total, p2Total) {
  this.scoreCount = 0;
  this.rolls = [];
  this.p1Turn = true;
  this.p2Turn = false;
  this.p1Total = 0;
  this.p2Total = 0;
}

  diceRoll = function() {
    let diceRoll =  Math.floor(Math.random() * 6 ) + 1;
    return diceRoll;
  }

  diceCount = function() {
    let myRoll = this.diceRoll();
    console.log(myRoll);
    // updateImage(myRoll);
    if (myRoll === 1) {
      this.scoreCount = 0;
      this.rolls = [];
      this.p1Turn = !this.p1Turn;
      this.p2Turn = !this.p2Turn;
    } else if (myRoll !== 1) {
      if (this.p1Turn === true) {
        this.scoreCount += myRoll;
        this.rolls.push(myRoll);
      } else {
        this.scoreCount += myRoll;
        this.rolls.push(myRoll);
      }
    console.log(this);
    console.log(this.scoreCount);
    this.winCondition();
    }
  }

  winCondition = function () {
    if (this.p1Total + this.scoreCount >= 50) {
      this.p1Total += this.scoreCount;
      console.log("Player 1 Wins!");
      $("#outcome").text("Player One Wins!");
      $(".container").hide();
    } else if (this.p2Total + this.scoreCount >= 50) {
      this.p2Total += this.scoreCount;
      console.log("Player 2 Wins!");
      $("#outcome").text("Player Two Wins!");
      $(".container").hide();
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