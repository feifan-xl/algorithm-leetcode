/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const gcd = (x, y) => y ? gcd(y, x % y) : x;
        let len = nums.length
        k = k % len
        let times = gcd(k, len)
        for (let i = 0; i < times; i++) {
            let cur = i
            let prev = nums[i]
            do {
                const next = (cur + k) % len
                const tmp = nums[next]
                nums[next] = prev
                prev = tmp
                cur = next
            }while (i != cur)
        }
    
        
    };