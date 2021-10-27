/**
 * 维护两个栈
 * 第一个支持插入操作
 * 第二个支持删除操作
 */

var CQueue = function() {
    this.insertStack = []
    this.removeStack = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.insertStack.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if (this.removeStack.length === 0) {
        while (this.insertStack.length !== 0) {
            this.removeStack.push(this.insertStack.pop())
        }
    }
    let temp = this.removeStack.pop()
    return temp || -1
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */