import Dice from "./../src/js/dice.js";

describe("Dice", () => {
  test('should create a dice object with score, rolls, turns, and totals properties', () => {
    let myDice = new Dice (0, [], true, false, 0, 0);
    expect(myDice.scoreCount).toEqual(0);
    expect(myDice.rolls).toEqual([]);
    expect(myDice.p1Turn).toEqual(true);
    expect(myDice.p2Turn).toEqual(false);
    expect(myDice.p1Total).toEqual(0);
    expect(myDice.p2Total).toEqual(0);
  });

  test('Should roll a number lesser than or equal to six',() => {
    let myDiceRoll = new Dice (0, [], true, false, 0, 0);
    expect(myDiceRoll.diceRollFunction()).toBeLessThanOrEqual(6);
  });

  test("Should change the boolean value on a player's turn if a 1 is rolled, false to true, and vice versa", () => {
    let myDice = new Dice (0, [], true, false, 0, 0 , 1);
    myDice.diceCount();
    expect(myDice.p1Turn).toEqual(false);
    expect(myDice.p2Turn).toEqual(true);
  });
  
  test("Should change the boolean value on a player's turn if a 1 is rolled, false to true, and vice versa", () => {
    let myDice = new Dice (3, [1,2,3,4], true, false, 0, 0 , 1);
    myDice.diceCount();
    expect(myDice.scoreCount).toEqual(0);
    expect(myDice.rolls).toEqual([]);
  });
});
