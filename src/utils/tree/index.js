/**
 * 二叉搜索树：左侧子节点小，右侧子节点大
 * 1. insert(key)
 * 2. 遍历
 *  1）inOrderTraverse
 *  2）preOrderTraverse
 *  3）postOrderTraverse
 * 3. search(key)
 * min
 * max
 * remove(key)
 */

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

function insertNode(node, newNode) {
  if (newNode.key < node.key) {
    if (node.left === null) {
      node.left = newNode;
    } else {
      insertNode(node.left, newNode);
    }
  } else {
    if (node.right === null) {
      node.right = newNode;
    } else {
      insertNode(node.right, newNode);
    }
  }
}

let inOrders = [];
function inOrderTraverseNode(node, cb) {
  if (node !== null) {
    inOrderTraverseNode(node.left, cb);
    cb(node.key);
    inOrderTraverseNode(node.right, cb);
  }
}

let preOrders = [];
function preOrderTraverseNode(node, cb) {
  if (node !== null) {
    cb(node.key);
    preOrderTraverseNode(node.left, cb);
    preOrderTraverseNode(node.right, cb);
  }
}

let postOrders = [];
function postOrderTraverseNode(node, cb) {
  if (node !== null) {
    postOrderTraverseNode(node.left, cb);
    postOrderTraverseNode(node.right, cb);
    cb(node.key);
  }
}

function minNode(node) {
  if (node) {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node.key;
  }
  return null;
}

function maxNode(node) {
  if (node) {
    while (node && node.right !== null) {
      node = node.right;
    }
    return node.key;
  }
  return null;
}

function findMinNode(node) {
  if (node) {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  }
  return null;
}

function searchNode(node, key) {
  if (node === null) {
    return false;
  }
  if (key < node.key) {
    return searchNode(node.left, key);
  } else if (key > node.key) {
    return searchNode(node.right, key);
  } else {
    return true;
  }
}

function removeNode(node, key) {
  if (node === null) {
    return null;
  }

  if (key < node.key) {
    node.left = removeNode(node.left, key);
    return node;
  } else if (key > node.key) {
    node.right = removeNode(node.right, key);
    return node;
  } else {
    // 1.没有子节点，直接删除
    if (node.left === null && node.right === null) {
      node = null;
      return node;
    }

    // 2.有一个子节点，删除节点后，设置当前节点node
    if (node.left === null) {
      node = node.right;
      return node;
    }
    if (node.right === null) {
      node = node.left;
      return node;
    }

    // 3.有两个子节点，删除子节点后，从右子树中找到最小值节点，并设置为当前节点
    let temp = findMinNode(node.right);
    node.key = temp.key;
    node.right = removeNode(node.right, temp.key);
    return node;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    let newNode = new Node(key);

    if (this.root === null) {
      this.root = newNode;
    } else {
      insertNode(this.root, newNode);
    }
  }

  inOrderTraverse(cb) {
    inOrders = [];
    inOrderTraverseNode(this.root, cb);
  }
  preOrderTraverse(cb) {
    preOrders = [];
    preOrderTraverseNode(this.root, cb);
  }
  postOrderTraverse(cb) {
    postOrders = [];
    postOrderTraverseNode(this.root, cb);
  }

  min() {
    return minNode(this.root);
  }
  max() {
    return maxNode(this.root);
  }
  search(key) {
    return searchNode(this.root, key);
  }

  remove(key) {
    return removeNode(this.root, key);
  }
}

const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

tree.inOrderTraverse(key => inOrders.push(key));
tree.preOrderTraverse(key => preOrders.push(key));
tree.postOrderTraverse(key => postOrders.push(key));

console.log("中序遍历", inOrders);
console.log("先序遍历", preOrders);
console.log("后序遍历", postOrders);

console.log("最小值", tree.min());
console.log("最大值", tree.max());

console.log("0存在？", tree.search(0));
console.log("13存在？", tree.search(13));

tree.remove(6);
tree.inOrderTraverse(key => inOrders.push(key));
console.log("remove 6", inOrders);

tree.remove(5);
tree.inOrderTraverse(key => inOrders.push(key));
console.log("remove 5,", inOrders);

tree.remove(15);
tree.inOrderTraverse(key => inOrders.push(key));
console.log("remove 15", inOrders);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.splice(0, 8), arr);

console.log(arr.splice(0, 8, 0));

function getArray(str) {
  const result = [];

  // while ((str = readline())) {
  let arr = str.split("");

  while (arr.length >= 8) {
    const item = arr.splice(0, 8);
    result.push(item.join(""));
  }

  if (arr.length > 0 && arr.length < 8) {
    while (arr.length < 8) {
      arr.push("0");
    }
    result.push(arr.join(""));
  }
  // }

  result.map(item => {
    console.log(item);
  });
}
const line =
  "guwldvzrsfurobidegiyazkggfpgmyhlrbfjrjerrbnjdenrdxjfmrhtumfdsedkcmthphgavzxlmpcpwbkwsvplhmkbkgkw";
getArray(line);
