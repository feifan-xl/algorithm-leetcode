

// 遍历

// 01. 前序遍历
function pre (root) {
  let res = []
  function dfs (root) {
    if(!root) return null
    res.push(root.val)
    dfs(root.left)
    dfs(root.right)
  }
  dfs(root)
  return res
}

function pre (root) {
  if (!root) return null
  const res = []
  const stack = [root]
  while (stack.length > 0) {
    let pop = stack.pop()
    pop.left && stack.push(pop.left)
    res.push(pop.val)
    pop.right && stack.push(pop.right)
  }
}

//  二叉树的层序遍历  102

var levelOrder = function(root) {
  let res = []
  function dfs (root, level) {
    if (!root) return
    res[level] = res[level] || []
    res[level].push(root.val)
    dfs(root.left, level + 1)
    dfs(root.right, level + 1)
  } 

  dfs(root, 0)
  return res
};


//  二叉树的锯齿形层序遍历 103

var zigzagLevelOrder = function(root) {
  let res = []
  function dfs (root, level) {
    if (!root) return
    res[level] = res[level] || []
    if (level % 2 === 0) {
      res[level].push(root)
    } else {
      res[level].unshift(root)
    }
    dfs(root.left, level + 1)
  }
  dfs(root, 0)
  return res
};


// 求二叉树的最大深度

function maxDepth(root) {
  if (!root) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}
function maxDepth (root) {
  let res = 0
  let stack = []
  while (stack.length > 0) {
    res = Math.max(res, stack.length)
    let temp = stack.pop()
    temp.left && stack.push(temp.left)
    temp.right && stack.push(temp.right)
  }
  return res
}




// 二叉搜索树中第 K 小的元素

function kthSmallest (root, k) {
  let res
  function dfs(root) {
    if (!root) return
    dfs(root.left)
    if (k === 0) {
      return
    } else {
      res = root.val
      k--
    }
    dfs(root.right)
  }
  dfs(root)
  return res
}


// 二叉树的最近公共祖先
function lowestCommonAncestor (root, q, p) {
  if (!root || root.val === q || root.val === p) return root

  const rigth = lowestCommonAncestor(root.right, p, q)
  const left = lowestCommonAncestor(root.left, p, q)
  if (left && rigth) {
    return root
  }

  return left || rigth
}


// 二叉树直径
function diameterOfBinaryTree (root) {
  let max = 0
  function dfs (root) {
    if (!root) return 0
    let left = dfs(root.left)
    let right = dfs(root.right)
    max = Math.max(max, left + right + 1)
    return Math.max(left, right)
  }
  dfs(root)
  return max
}

// 求根到叶子结点数字之和

function sumNumbers (root) {
  let res = 0
  function dfs (root, s) {
    if(!root) return
    s += root.val
    if (!root.left && !root.left) {
      res += +s
      return
    }
    dfs(root.left, s)
    dfs(root.right, s)
  }
  dfs(root, s)
  return res
}




// 判断二叉树是否是对称二叉树
function isSymmetric (root) {
  function dfs(left, right) {
    if (!left && !right) return true
    if (!left || !right) return false
    return (
      left.val === right.val &&
      dfs(left.left, right.right) && 
      dfs(left.right, right.left)
    )
  }
  return dfs(root, root)
}



// 验证二叉搜索树

function isSearchTree (root) {
  function dfs (root, l, r) {
    if (!node) return true
    if (node.val < l || node.val > r) return false
    return (
      dfs(root.left, l, root.val) && 
      dfs(root.right, root.val, r)
    )
  }
  return dfs(root, -Infinity, Infinity)
}



//  从前序和中序遍历序列构造二叉树



