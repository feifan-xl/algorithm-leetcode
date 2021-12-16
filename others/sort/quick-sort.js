
function quickSort (arr, left = 0, right = arr.length) {
  let len = arr.length,
    partitionIndex
  if (left < right) {
    partitionIndex = partition(arr, left, right)
    quickSort(arr, left, partitionIndex - 1)
    quickSort(arr, partitionIndex - 1, right)
  }
  return arr
}

function partition (arr, left, right) {
  var pivot = left,
   index = pivot + 1,
   x = arr[pivot]
  for (let i = index; i < right; i++) {
    if (arr[i] <= x) {
      swap(arr, i, pivot)
      index++
    }
  }
  swap(arr, pivot, index - 1)
  return index - 1
}

function swap (arr, i, j) {
  
}
