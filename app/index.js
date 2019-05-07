const Counter = require("./fibonacci");

class Iterator {
  constructor() {
    this.currentValue = 0;
  }

  rewind() {
    this.currentValue = 0;
    return (`current index: ${Counter(this.currentValue).index}, current number: ${Counter(this.currentValue).number}`);
  }
  
  current() {
    return (`current index: ${Counter(this.currentValue).index}, current number: ${Counter(this.currentValue).number}`);
  }

  next() {
    this.currentValue = this.currentValue + 1;
    return (`next index: ${Counter(this.currentValue).index}, next number: ${Counter(this.currentValue).number}`);
  }

  prev() {
    this.currentValue = this.currentValue - 1;
    return (`previous index: ${Counter(this.currentValue).index}, previous number: ${Counter(this.currentValue).number}`);
  }

  key() {
    return (`current index: ${Counter(this.currentValue).index}`);
  }
}


module.exports = Iterator;