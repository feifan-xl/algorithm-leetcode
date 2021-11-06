/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    let res = [], flag = false
    const fn = arr => {
        flag = !flag
        let temp = [], stack = []
        arr.forEach( i => {
            if (i === null) return
            if (flag) {
                temp.push(i.val)
            } else {
                temp.unshift(i.val)
            }
            stack.push(i.left)
            stack.push(i.right)
        })
        if (temp.length !== 0) res.push(temp)
        if (stack.length !== 0) fn(stack)
    }
    fn([root])
    return res
};