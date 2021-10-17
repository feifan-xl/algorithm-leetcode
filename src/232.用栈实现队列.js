/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start

var MyQueue = function() {
    this.insetStack = []
    this.removeStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.insetStack.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.removeStack.length === 0) {
        while (this.insetStack.length > 0) {
            this.removeStack.push(this.insetStack.pop())
        }
    }
    return this.removeStack.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.removeStack.length === 0) {
        while (this.insetStack.length > 0) {
            this.removeStack.push(this.insetStack.pop())
        }
    }
    return this.removeStack[this.removeStack.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return (this.insetStack.length + this.removeStack.length) === 0
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

