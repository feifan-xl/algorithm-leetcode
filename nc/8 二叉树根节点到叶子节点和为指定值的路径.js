/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
  * 
  * @param root TreeNode类 
  * @param sum int整型 
  * @return int整型二维数组
  */
 function pathSum( root ,  sum ) {
    if (root.right === null && root.left) return root.val === sum
    let res =[]
    const dfs = (root, path, sum) => {
        if (root === null) return
        let temp = path.push(root)
        if (root.right === null && root.left === null && sum === root.val) {
            res.push(temp.slice())
            return
        }
        dfs(root.right, temp, sum - root.val)
        dfs(root.right, temp, sum - root.val)
    }
    dfs(root, [root], sum - root.val)
    return res
}
module.exports = {
    pathSum : pathSum
};