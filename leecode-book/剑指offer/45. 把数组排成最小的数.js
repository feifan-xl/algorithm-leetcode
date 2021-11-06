/**
 * @param {number[]} nums
 * @return {string}
 */
 var minNumber = function(nums) {
    function  quickSort (arr) {
        if (arr.length <= 1) return arr
        let mid = Math.floor((arr.length - 1) / 2)
        let lArr = [], mArr = [], rArr = []
        for (let i = 0; i < arr.length; i++) {
            let p1 = arr[i] + '' + arr[mid]
            let p2 = arr[mid] + ''  + arr[i]
            if (p1 > p2) {
                rArr.push(arr[i])
            } else if (p1 < p2) {
                lArr.push(arr[i])
            } else {
                mArr.push(arr[i])
            }
        }
        return quickSort(lArr).concat([...mArr, ...quickSort(rArr)])
    }
    return quickSort(nums).join('')
};