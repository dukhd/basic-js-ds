const { NotImplementedError } = require('../lib/errors');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }

  add(data) {
    if (!this.rootNode) {
      this.rootNode = new Node(data);
      return;
    }
    let current = this.rootNode;
    while(true) {
      if (data  < current.data) {
        if (!current.left) {
          current.left = new Node(data);
          return;
        }
        current = current.left;
      } else if (data > current.data) {
        if (!current.right) {
          current.right = new Node(data);
          return;
        }
        current = current.right;
      } else {
          return;
        }
    }
  }


  find(data) {
    let current = this.rootNode;
    while (current) {
      if (data === current.data) return current;
      current = data < current.data ? current.left : current.right;
    }
    return null;
  }

  has(data) {
    return Boolean(this.find(data));
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }
  removeNode(currentNode, data) {
    if(currentNode === null) return;
    if (data < currentNode.data) {
      currentNode.left = this.removeNode(currentNode.left, data);
      return currentNode;
    } else if (data > currentNode.data) {
      currentNode.right = this.removeNode(currentNode.right, data);
      return currentNode;
    } else {
      if (!currentNode.left && !currentNode.right) {
        return null;
      }
      if (!currentNode.left) {
        return currentNode.right;
      }
      if (!currentNode.right) {
        return currentNode.left;
      }
      
      let minRight = currentNode.right;
      while (minRight.left) {
        minRight = minRight.left;
      }
      currentNode.data = minRight.data;
      currentNode.right = this.removeNode(currentNode.right, minRight.data);

      return currentNode;
    }
  }

  min() {
    if (!this.rootNode) return null;
    let current = this.rootNode;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    if (!this.rootNode) return null;
    let current = this.rootNode;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};