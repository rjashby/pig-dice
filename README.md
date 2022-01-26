describe dice();

Test: It should create a dice object with a property of score set to 0.
Code: function Dice() {
      this.scoreCount = 0;
      };
      let newDice = new Dice;
      myDice;
Expected Output: dice {scoreCount: 0}scoreCount: 0[[Prototype]]: Object

describe Dice.prototype.diceRoll();

Test: It should return a random number between 1 and 6, including 1 and 6.
Code: let diceRoll = return Math.floor(Math.random() * 6 ) + 1
Expected Output: A random number, e.g. 4.


describe Dice.prototype.diceCount();

Test: Method should increment the score count on the dice object.
Code: Dice.prototype.diceCount = function() {
  this.scoreCount += 1;
}
Expected Output: Dice {
  this.scoreCount = 1;
}