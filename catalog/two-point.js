


// n数之和

// 2 数之和
function twoSum (nums, target) {
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] === undefined) {
      obj[target- nums[i]] = nums[i]
    } else {
      return [nums[i], obj[nums[i]]]
    }
  }
  return []
}



// 三数之和

function threeSum (nums) {
  let res = []
  nums = nums.sort((a,b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue
    let left = i + 1, right = nums.length - 1

    while (left< right) {
      if (nums[i] + nums[left] + nums[right]) {
        res.push([i, left, right])

        while (nums[left] === nums[left + 1]) {
          left++
        }
        while (nums[right] === nums[right - 1]) {
          right--
        }
        left++
        right--
      } else if (nums[left] + nums[right] + nums[i] > 0 ) {
        right--
      } else {
        left++
      }
    }
  }
  return res
}


// 最接近的三数之和
function threeSumClosest (nums, target) {
  nums = nums.sort((a, b) => a - b)
  if (!nums.length) return 0
  let min = Infinity, res = []
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1, right = nums.length - 1
    while(left < right) {
      let temp = Math.abs(nums[i] + nums[left] + nums[right] - target)
      if (temp === 0) return [i, left, right]
      if (temp < min) {
        min = temp
        res = [i, left, right]
      }
      if (nums[i] + nums[left] + nums[right] > target) {
        right--
      } else {
        left++
      }
    }
  }
}




// 接雨水
maxArea( [0,1,0,2,1,0,1,3,2,1,2,1])
function maxArea (heights) {
  let len = heights.length
  let maxLeft = [heights[0]]
  for (let i = 1; i <len; i++) {
    maxLeft[i] = Math.max(heights[i], maxLeft[i - 1])
  }
  console.log(maxLeft);
  let max = heights[len - 1], res = 0
  for (let i = len - 2; i > 0; i--) {
    if (max > heights[i]) {
      console.log(Math.min(max, maxLeft[i]) - heights[i])
      res += Math.min(max, maxLeft[i]) - heights[i]
    } else {
      max = heights[i]
    }
  }
  return res
}



// 盛最多水的容器
function maxArea (heights) {
  let left = 0, right = heights.length - 1, area = 0

  while(left < right) {
    const width = right - left
    const temp = Math.min(heights[left], heights[right])
    area = Math.max(area, temp)
    if (heights[left] > heights[right]) {
      right--
    } else {
      left++
    }
  }
  return area
}


// 长度最小的子数组

function minSubArrayLen (s, nums) {
  if (nums.length === 0) return 0
  if (nums[0] > s) return 1

  let left = 0, right = 1, res = nums[0], minLen = Infinity
  while (right < nums.length) {
    res += nums[right]
    while (s >= res) {
      minLen = Math.min(Infinity, right - left + 1)
      sum -= nums[left]
      left++
    }
    right++
  }
  return minLen === Infinity ? 0 : minLen
}


// 删除链表的倒数第 n 个节点
function deleteNthFromEnd (head,n) {
  let p1 = head, p2 = head

  while (p2 !== null && n > 0 ) {
    p2 = p2.next
    n--
  }
  if(n !== 0) return null
  let prev
  while(p2 !== null) {
    prev = p1
    p1 = p1.next
    p2 = p2.next
  }
  prev.next = p1.next
  return head
}


// 回文链表
// 快慢指针取中间值

// 反转链表
function reverseList (head) {
  let prev = null, cur = head
  while (cur) {
    let temp = cur.next
    cur.next = prev
    prev = cur
    cur = temp
  }
}










































