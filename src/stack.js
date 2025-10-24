const { NotImplementedError } = require('../lib/errors');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stackArr = [];
  }
  push(value) {
    this.stackArr.push(value);
  }

  pop() {
    return this.stackArr.pop();
  }

  peek() {
    return this.stackArr[this.stackArr.length - 1];
  }
}

module.exports = {
  Stack,
};
