/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {

    function Queue () {
        this.queue = []

        this.push = function (n) {
            while (this.queue.length > 0 && this.queue[this.queue.length - 1] < n) {
                this.queue.pop()
            }
            this.queue.push(n)
        }

        this.remove = function (n) {
            if (n === this.queue[0]) {
                this.queue.shift()
            }
        }

        this.max = function (){
            return this.queue[0]
        }
    }

    let q = new Queue()
    let res = []
    for (let i = 0; i <nums.length; i++) {
        if (i < k - 1) {
            q.push(nums[i])
        } else {
            q.push(nums[i])
            res.push(q.max())
            q.remove(nums[i - k + 1])
        }
    }
    return res

};