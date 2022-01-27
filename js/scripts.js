// BUSINESS LOGIC

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

Dice.prototype.diceCount = function() {
  let myRoll = this.diceRoll();
  console.log(myRoll);
  updateImage(myRoll);
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

Dice.prototype.winCondition = function () {
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

Dice.prototype.hold = function() {
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

// function startGame() {
//   let newDice = new Dice();
// }
// UI LOGIC

$(document).ready(function() {
  let newDice = new Dice();
  //$("#start").click(function() {
 //})
  // if (newDice.p1Turn === true) {
    $("#roll").click(function() {
      newDice.diceCount();
      //newDice.winCondition();
      console.log(newDice);
      $("#player1Score").html(newDice.p1Total);
      $("#turnRolls").html(newDice.rolls + ", ");
      //$("#player2Score").html(newDice.p2Total);
      if (newDice.p1Turn !== true) {
        $("#playerOne").hide();
        $("#playerTwo").show();
      }
    })

    $("#hold").click(function() {
      newDice.hold();
      console.log(newDice);
      $("#player1Score").html(newDice.p1Total);
      $("#player2Score").html(newDice.p2Total);
      if (newDice.p1Turn !== true) {
        $("#playerOne").hide();
        $("#playerTwo").show();
      }
    })
  // } else {
    $("#roll2").click(function() {
      newDice.diceCount();
      // updateImage(newDice.myRoll());
      //newDice.winCondition();
      console.log(newDice);
      //$("#player1Score").html(newDice.p1Total);
      $("#turnRolls").html(newDice.rolls + ", ");
      $("#player2Score").html(newDice.p2Total);
      if (newDice.p2Turn !== true) {
        $("#playerOne").show();
        $("#playerTwo").hide();
      }
    })

    $("#hold2").click(function() {
      newDice.hold();
      console.log(newDice);
      //$("#player1Score").html(newDice.p1Total);
      $("#player2Score").html(newDice.p2Total);
      if (newDice.p2Turn !== true) {
        $("#playerOne").show();
        $("#playerTwo").hide();
      }
    })
  })

  function updateImage(myRoll){
    $(".showDice").hide();
    switch (myRoll) {
      case (1):
        $("#one").show();
        break;
      case (2):
        $("#two").show();
        break;
      case (3):
        $("#three").show();
        break;
      case (4):
        $("#four").show();
        break;
      case (5):
        $("#five").show();
        break;
      case (6):
        $("#six").show();
        break;  
      default:
      console.warn("You Mother Never Loved You!");
    }
  } 
// $("#roll").attr("disabled", true);  
// $("#hold").attr("disabled", true);