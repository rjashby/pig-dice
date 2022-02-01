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
  
  test("Should set scoreCount to 0 and rolls to empty array", () => {
    let myDice = new Dice (3, [1,2,3,4], true, false, 0, 0 , 1);
    myDice.diceCount();
    expect(myDice.scoreCount).toEqual(0);
    expect(myDice.rolls).toEqual([]);
  });

  test("Should set scoreCount to dice roll and rolls array must be increments with dice roll", () => {
    let myDice = new Dice (0, [], true, false, 0, 0 , 3);
    myDice.diceCount();
    expect(myDice.scoreCount).toEqual(3);
    expect(myDice.rolls).toEqual([3]);
  });
  
  test("Should declare a winner once a score of 100 is reached", () => {
  let myDice = new Dice (0, [], true, false, 97, 0 , 4);
  myDice.diceCount();
  expect(myDice.p1Total).toEqual(101);
  });

  test("Should set scoreCount as playerscore ,rolls as empty array,scoreCount as 0 ", () => {
    let myDice = new Dice (10, [5], true, false, 10, 0 , 5);
    myDice.hold();
    expect(myDice.p1Total).toEqual(20);
    expect(myDice.rolls).toEqual([]);
    expect(myDice.scoreCount).toEqual(0);
    expect(myDice.p1Turn ).toEqual(false)
    expect(myDice.p2Turn ).toEqual(true)
    });


})