/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    nums = nums.sort((a, b) => a - b)
    debugger
    const res = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) continue
        
        let l = i + 1, r = nums.length - 1
        while (l < r) {
            if (l < r) {
                const sum = nums[r] + nums[l] + nums[i]
                if (sum === 0) {
                    res.push([nums[i], nums[l], nums[r]])
                    while(nums[l] == nums[l + 1]) l++
                    while(nums[r] == nums[r - 1]) r--
                    l++
                    r--
                } else if (sum > 0 ) {
                    r--
                } else if (sum < 0) {
                    l++
                }
            }
        }
    }
    return res
};
threeSum([-1,0,1,2,-1,-4])

let p = new Promise((res, rej) => {})
p.then()

function Promise (exector) {

    this.state = ''
    function resolve () {

    }
    try {
        exector(resolve)
    } catch (e) {

    }
}
Promise.prototype.then = function (onfufiled, onRejected) {
    const self = this
    let promise2 = new Promise(function (resolve, reject) {
        if (this.state ==='') {
            
        }
    })
    this.onfufiledList.push(onfufiled)
    return promise2
}