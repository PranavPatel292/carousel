let head = null;
let temp = null;

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

const insertHelper = (value, arrayLength, currentIndex) => {
  if (head === null) {
    head = new Node(value);
    temp = head;
  } else if (currentIndex !== arrayLength) {
    temp.next = new Node(value);

    temp.next.prev = temp;
    temp = temp.next;
  } else if (currentIndex === arrayLength) {
    temp.next = new Node(value);
    temp.next.prev = temp;
    temp.next.next = head;
    temp = temp.next;
    head.prev = temp;
  }
};

const insert = (array) => {
  let arrayLength = array.length - 1;

  array.forEach((element, index) => {
    insertHelper(element, arrayLength, index);
  });

  return head;
};

const getNextNNodes = (node, n) => {
  let temp = [];

  while (n !== 0) {
    temp.push(node.value);
    node = node.next;
    n -= 1;
  }
};

const getPrevNNodes = (node, n) => {
  let temp = [];

  while (n !== 0) {
    temp.push(node.value);
    node = node.prev;
    n -= 1;
  }
};

const getShowNNodes = (node, n, direction, prevNNodeStart, nextNNodeStart) => {
  let temp = [];

  if (direction === "right") {
    prevNNodeStart = node.prev;

    while (n !== 0) {
      temp.push(node.value);
      node = node.next;
      n -= 1;
    }

    nextNNodeStart = node;
  } else if (direction === "left") {
    node = node.prev;
    nextNNodeStart = node.next;
    while (n !== 0) {
      temp.push(node.value);
      node = node.prev;
      n -= 1;
    }

    prevNNodeStart = node;
  }

  return [temp, prevNNodeStart, nextNNodeStart];
};
export { insert, getNextNNodes, getPrevNNodes, getShowNNodes };
