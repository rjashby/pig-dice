
let diceRoll =  Math.floor(Math.random() * 6 ) + 1;
console.log(diceRoll);

function TicketStub(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.cost = 4;
};

function Dice() {
  this.scoreCount = 0;
}

// function gameScore() {
//   this.playerOne 
// }