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

Test: Method should increment the score count on the dice object based on diceRoll method.
Code: Dice.prototype.diceCount = function() {
  this.scoreCount += this.diceRoll();
}
Dice.diceCount() = a random number e.g. 5;
Dice.diceCount = 5 plus another random number, e.g. 5;
Expected Output: Dice.diceCount();
  Dice.scoreCount = 5;
  Dice.diceCount();
  Dice.scoreCount = 8; <-- rolled a 3 on second diceCount method.
}

describe Dice.prototype.turnEnd();

Test: Method end the counter and turn off player turn boolean when a 1 is rolled.
Code: Dice.prototype.turnEnd = function();
this.scoreCount = 0;
Expected Output: Dice {scoreCount: 0}
scoreCount: 0
turn = false
[[Prototype]]: Object