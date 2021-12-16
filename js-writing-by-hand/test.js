
var MyQueue = function() {
  this.removeStack = []
  this.insertStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.insertStack.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (this.removeStack.length === 0) {
    while (this.insertStack.length > 0) {
      this.removeStack.push(this.insertStack.pop())
    }
  }
  return this.removeStack.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (this.removeStack.length === 0) {
    while (this.insertStack.length > 0) {
      this.removeStack.push(this.insertStack.pop())
    }
  }
  return this.removeStack.pop()
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {

};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */