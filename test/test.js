const Iterator =  require("../app/index");
const expect = require("chai").expect;

const newIterator = new Iterator();

describe("iterator test", () => {
  it ("testing next number", () => {
    let i = 0;
    while (i < 5) {
      newIterator.next();
      i++;
    };
    expect(newIterator.next()).to.be.equal("next index: 6, next number: 8");
  });

  it ("testing current number + key", () => {
    newIterator.next();
    newIterator.next();
    expect(newIterator.current()).to.be.equal("current index: 8, current number: 21");
    expect(newIterator.key()).to.be.equal("current index: 8");
  });

  it ("testing previous number", () => {
    expect(newIterator.prev()).to.be.equal("previous index: 7, previous number: 13");
  });

  it ("testing rewind method", () => {
    expect(newIterator.rewind()).to.be.equal("current index: 0, current number: 0");
    let i = 0;
    while (i < 5) {
      newIterator.next();
      i++;
    };
    expect(newIterator.current()).to.be.equal("current index: 5, current number: 5");
  });
});