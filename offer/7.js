/*
输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

 

例如，给出

前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7
 

限制：

0 <= 节点个数 <= 5000

 

注意：本题与主站 105 题重复：https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

class TreeNode {
  constructor(val) {
    this.val = val
    this.left = this.right = null
  }
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (
    preorder == null ||
    inorder == null ||
    preorder.length == 0 ||
    inorder.length == 0
  ) {
    return null
  }
  return buildTreeCore(
    preorder,
    inorder,
    0,
    preorder.length - 1,
    0,
    inorder.length - 1
  )
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @param {number} preorderStart
 * @param {number} preorderEnd
 * @param {number} inorderStart
 * @param {number} inorderEnd
 * @return {TreeNode}
 */
var buildTreeCore = function (
  preorder = [],
  inorder = [],
  preorderStart,
  preorderEnd,
  inorderStart,
  inorderEnd
) {
  var rootValue = preorder[preorderStart]
  var root = new TreeNode(rootValue)
  var index = inorder.findIndex(item => {
    return item == rootValue
  })
  root.left = buildTreeCore(
    preorder,
    inorder,
    preorderStart + 1,
    preorderStart + index - inorderStart
  )
  root.right = buildTreeCore(preorder, inorder)
  return root
}
