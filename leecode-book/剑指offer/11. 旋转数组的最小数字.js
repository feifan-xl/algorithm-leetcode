/**
 * @param {number[]} numbers
 * @return {number}
 */
 var minArray = function(numbers) {
    let left = 0, right = numbers.length - 1
    while (left < right) {
        const mid = Math.floor((left + right) / 2)
        if (numbers[right] < numbers[mid]) {
            left = mid + 1
        } else if (numbers[right] > numbers[mid]) {
            right = mid
        } else {
            right -= 1
        }
    }
    return numbers[left]
};