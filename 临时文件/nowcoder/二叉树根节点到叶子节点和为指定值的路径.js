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
   let res = []
  function getChildPath (root, sum, arr) {
    if (root.left == null && root.right === null) {
      if (sum === root.val) res.push([...arr, root.val])
      return
    }
    if(root.left) getChildPath(root.left, sum-root.val, arr.push(root.val))
    if(root.right) getChildPath(root.right, sum-root.val, arr.push(root.val))
  }
  getChildPath(root, sum, [])
  return res
  
}
module.exports = {
  pathSum : pathSum
};