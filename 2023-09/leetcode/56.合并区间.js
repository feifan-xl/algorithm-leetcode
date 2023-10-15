/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals = intervals.sort((a, b) => a[0] - b[0])
    let res = []
    let cur = intervals[0]
    for (let i = 1; i < intervals.length; i++) {
        let next = intervals[i]
        if (next[0] > cur[1]) {
            res.push(cur)
            cur = intervals[i]
        } else {
            if (next[1] > cur[1]) {
                cur[1] = next[1]
            }
        }
    }
    res.push(cur)
    return res
};