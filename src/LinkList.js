class Node {
  constructor(value) {
    self.value = value;
    self.next = null;
    slef.prev = null;
  }
}

const insertHelper = (value, arrayLength, currentIndex, head, temp) => {
  if (head === null) {
    head = Node(value);
    temp = head;
  } else if (currentIndex != arrayLength) {
    temp.next = Node;
    Node.prev = temp;
    temp = temp.next;
  } else if (currentIndex === arrayLength) {
    temp.next = Node;
    Node.prev = temp;
    Node.next = head;
  }
};

const insert = (array) => {
  let head = null;
  let temp = null;

  let arrayLength = array.length() - 1;

  array.forEach((element, index) => {
    insertHelper(element, arrayLength, index, head, temp);
  });

  return head;
};

const getNextNNodes = (node, n) => {
  let temp = [];

  while (n !== 0) {
    temp.push(node.value);
    temp = temp.next;
    n -= 1;
  }
};

const getPrevNNodes = (node, n) => {
  let temp = [];

  while (n !== 0) {
    temp.push(node.value);
    temp = temp.prev;
    n -= 1;
  }
};

const getShowNNodes = (node, n, direction, prevNNodeStart, nextNNodeStart) => {
  let temp = [];

  if (direction === "right") {
    prevNNodeStart = node;

    while (n !== 0) {
      temp.push(node.value);
      temp = temp.next;
      n -= 1;
    }

    nextNNodeStart = node;
  } else if (direction === "left") {
    nextNNodeStart = node; // we might change this to node.prev!
    while (n !== 0) {
      temp.push(temp.value);
      temp = temp.prev;
      n -= 1;
    }

    prevNNodeStart = node;
  }

  return [temp, prevNNodeStart, nextNNodeStart];
};
export { insert, getNextNNodes, getPrevNNodes, getShowNNodes };
