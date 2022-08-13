class node {
  constructor(value) {
    self.value = value;
    self.next = null;
    slef.prev = null;
  }
}

const insertHelper = (value, arrayLength, currentIndex, head, temp) => {
  if (head === null) {
    head = node(value);
    temp = head;
  } else if (currentIndex != arrayLength) {
    temp.next = node;
    node.prev = temp;
    temp = temp.next;
  } else if (currentIndex === arrayLength) {
    temp.next = node;
    node.prev = temp;
    node.next = head;
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
