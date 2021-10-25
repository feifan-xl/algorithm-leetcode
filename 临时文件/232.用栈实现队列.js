/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start

var MyQueue = function() {
  this.insertStack = []
  this.removeStack = []
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
  let temp = this.removeStack.pop()
  return temp
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
  return this.removeStack[this.removeStack.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return (this.insertStack.length + this.removeStack.length) === 0
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

