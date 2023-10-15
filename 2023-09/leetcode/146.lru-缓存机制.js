/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.map = {}
    this.list = []
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.map[key] === undefined) {
        return -1
    }
    this.list.splice(this.list.indexOf(key), 1)
    this.list.unshift(key)
    return this.map[key]
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map[key] !== undefined) {
        this.list.splice(this.list.indexOf(key), 1)
    }
    this.list.unshift(key)
    this.map[key] = value
    if (this.list.length > this.capacity) {
        const tmp = this.list.pop()
        this.map[tmp] = undefined
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */