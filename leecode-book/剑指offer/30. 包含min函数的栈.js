/**
 * 思路: 两个栈 一个维护正常数据 另一个维护最小值
 */

/**
 * initialize your data structure here.
 */
 var MinStack = function() {
  this.stack = []
  this.minStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x)
  if (this.minStack.length === 0 || this.minStack[this.minStack.length - 1] >= x) {
    this.minStack.push(x)
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  let temp = this.stack.pop()
  if (temp === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop()
  }
  return temp
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
  return this.minStack[this.minStack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */