import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Dice from './js/dice.js';
// UI LOGIC

$(document).ready(function() {
  let newDice = new Dice();
  $("#roll").click(function() {
    newDice.diceCount();
    console.log(newDice);
    $("#player1Score").html(newDice.p1Total);
    $("#turnRolls").html(newDice.rolls + ", ");
    if (newDice.p1Turn !== true) {
      $("#playerOne").hide();
      $("#playerTwo").show();
    }
  });

  $("#hold").click(function() {
    newDice.hold();
    console.log(newDice);
    $("#player1Score").html(newDice.p1Total);
    $("#player2Score").html(newDice.p2Total);
    if (newDice.p1Turn !== true) {
      $("#playerOne").hide();
      $("#playerTwo").show();
    }
  });
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
  });

  $("#hold2").click(function() {
    newDice.hold();
    console.log(newDice);
    //$("#player1Score").html(newDice.p1Total);
    $("#player2Score").html(newDice.p2Total);
    if (newDice.p2Turn !== true) {
      $("#playerOne").show();
      $("#playerTwo").hide();
    }
  });
});

// function updateImage(myRoll){
//   $(".showDice").hide();
//   switch (myRoll) {
//     case (1):
//       $("#one").show();
//       break;
//     case (2):
//       $("#two").show();
//       break;
//     case (3):
//       $("#three").show();
//       break;
//     case (4):
//       $("#four").show();
//       break;
//     case (5):
//       $("#five").show();
//       break;
//     case (6):
//       $("#six").show();
//       break;  
//     default:
//     console.warn("You Mother Never Loved You!");
//   }
// } 
// $("#roll").attr("disabled", true);  
// $("#hold").attr("disabled", true);