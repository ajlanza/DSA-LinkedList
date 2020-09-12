class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
}

}
class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertLast(item) {
    if(this.head === null) {
      this.insertFirst(item);      
    }
    else {
      let tempNode = this.head;
      while(tempNode.next !== null){
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  insertBefore(newItem, beforeItem){
    if(this.head === null){
      this.insertFirst(newItem);
      return;
    }
    let currNode = this.head;
    let prevNode = this.head;
    while(currNode.next !== null && currNode.value !== beforeItem){
      prevNode = currNode;
      currNode = currNode.next
    }
    if(currNode === null) {
      return `${beforeItem} not in list.`; 
    }
    const newNode = new _Node(newItem, currNode);
    prevNode.next = newNode;

  }
  insertAfter(newItem, afterItem) {
    if(this.head === null) {
      this.insertFirst(newItem);
      return;
    }
    let currNode = this.find(afterItem);
    if (currNode === null) {
      return `${afterItem} not in list.`
    }
    const newNode = new _Node(newItem, currNode.next);
    currNode.next = newNode;
  }
  insertAt(newItem, position){
    if(!this.head){
      return null;
    }
    let currNode = this.head;
    let prevNode = this.head;
    for(let i = 0; i < position-1; i++){
      if(currNode.next === null) {
        this.insertLast(newItem);
        return `That position position doens't exist. Item added to end of list.`
      }
      prevNode = currNode;
      currNode = currNode.next;
    }
    const newNode = new _Node(newItem, currNode);
    prevNode.next = newNode;

  }
  find(item) {
    let currNode = this.head;
    if(!this.head){
      return null;
    }
    while(currNode.value !== item){
      if(currNode.next === null){
        return null;
      }
      else {
        currNode = currNode.next
      }
    }
    return currNode;
  }
  remove(item) {
    if(!this.head) {
      return null;
    }
    if(this.head.value === item){
      this.head = this.head.next;
      return
    }
    let currNode = this.head;
    let prevNode = this.head;
    while(currNode.value !== item) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null){
      console.log('Item not found');
      return;
    }
    prevNode.next = currNode.next;
  }
}

function display(list) {
  let values = [];
  let currNode = list.head;
  while(currNode !== null){
    values.push(currNode.value);
    currNode = currNode.next;
  }
  return {...values};
}

function size(list) {
  let counter = 0;
  let currNode = list.head
  while(currNode !== null) {
    counter++;
    currNode = currNode.next;
  };
  return counter;
}

function isEmpty(list) {
  if(!list.head || list.head === null){
    return true;
  }
  else {
    return false;
  }
}

function findPrevious(item, list) {
    if(!list.head || list.head === null){
      return 'Not a list.';
    }
    let currNode = list.head;
    let prevNode = list.head;
    while(currNode !== null && currNode.value !== item) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === list.head){
      return `${item} is the first node, there is nothing previous.`;
    }
    if(currNode === null){
      return `${item} not in list.`
    }
    return prevNode.value;   
}

function findLast(list) {
  if(!list.head || list.head === null){
    return 'Not a list.'
  }
  let currNode = list.head;
  while(currNode.next !== null){
    currNode = currNode.next;
  }
  return currNode.value;
}
// Needs implementation
// function reverse(list) {
 
// }

function thirdFromEnd(list) {
  if(!list.head || list.head === null) {
    return 'Not a list.'
  }
  let currNode = list.head;
  while (currNode.next !== null){
    nextNode = currNode.next;
    nextNextNode = nextNode.next;
    if(nextNextNode.next === null){
      return `${currNode.value} is third from the end`;
    }
    else { 
      currNode = nextNode;
    }
  }
}

function middle(list){
  if(!list || list.head === null) {
    return `No List.`
  }
  let currNode = list.head;
  let endNode = currNode.next.next;
  
  while(endNode.next !== null) {
    currNode = currNode.next;
    endNode = endNode.next.next;
    if(!endNode){
      return `even items in list, middle item rounded down is ${currNode.value}`;
    }
  }
  return `odd items in list, middle item is ${currNode.next.value}`;
}

function cycle(list) {
  if(!list || list.head === null){
    return console.log('Bad list.');
  }
  let currNode = list.head;
  let tempNode = list.head;
  while(currNode !== null) {
    console.log(`current ${currNode.value} temp ${tempNode.value}`);
    if(tempNode.next === currNode){
      return console.log(`List has a cycle ${tempNode.value} points to ${currNode.value}`);
    }
    tempNode = tempNode.next;
    if(tempNode === null){
      currNode = currNode.next;
      tempNode = currNode.next;
      if(tempNode === null){
        return console.log('no cycle');
      }
    }
    
  }
  console.log(currNode.value);
    //currNode= currNode.next;
}
// Needs work
// function sort(list){
//   if(!list || list.head === null){
//     return console.log(`Bad list`);
//   }
//   let max = 0;
//   let prevNode = list.head;
//   let nextNode = list.head;
//   let maxNode = list.head;
//   let currNode = list.head;
//   let tempNode = list.head;
//   while(currNode !== null){
//     while(tempNode !== null) {
//       if(tempNode.value > max){

//         maxNode = tempNode;
//         max = tempNode.value;  
//       }
//       console.log(`max: ${max} maxNode value: ${maxNode.value} currNode: ${currNode.value} tempNodeValue: ${tempNode.value}`);
//       tempNode = tempNode.next;
//     }
//     console.log(`INSERT REMOVE ${max}`);    
//     currNode = currNode.next;
//     tempNode = currNode;
//   }
// }

function main() {
    let SLL = new LinkedList();
  
    SLL.insertFirst('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    SLL.insertLast('Tauhida');
    SLL.remove('Husker');
    SLL.insertBefore('Athena', 'Boomer');
    SLL.insertAfter('Hotdog', 'Helo');
    SLL.insertAt('Kat', 3);
    SLL.remove('Tauhida');
   
    
    return SLL;
  }

function middleTest() {
  let evenLL = new LinkedList();
    evenLL.insertFirst('1');
    evenLL.insertLast('2');
    evenLL.insertLast('3');
    evenLL.insertLast('4');
    evenLL.insertLast('5');
    evenLL.insertLast('6');
    evenLL.insertLast('7');
    evenLL.insertLast('8');
    evenLL.insertLast('9');
    evenLL.insertLast('10');
    
  let oddLL = new LinkedList();
    oddLL.insertFirst('1');
    oddLL.insertLast('2');
    oddLL.insertLast('3');
    oddLL.insertLast('4');
    oddLL.insertLast('5');

  console.log(middle(evenLL));
  console.log(middle(oddLL));
  console.log(middle(main()));
  }
  
  function cycleTest() {
    let CLL = new LinkedList();
      CLL.insertFirst('1');
      CLL.insertLast('2');
      CLL.insertLast('3');
      CLL.insertLast('4');
      CLL.insertLast('5');
      //CLL.find('5').next = CLL.find('1');
    
    cycle(CLL);
  }
  function sortTest() {
    let sortLL = new LinkedList();
      sortLL.insertFirst(19);
      sortLL.insertLast(2);
      sortLL.insertLast(5);
      sortLL.insertLast(3);
      sortLL.insertLast(100);

      sort(sortLL);
  }
  console.log(display(main()));
//   console.log(size(main()));
//   console.log(isEmpty(main()));
//   console.log(isEmpty(7));
//   console.log(findPrevious('Apollo', main()));
//   console.log(findLast(main()));
//   console.log(display(reverse(main())));
//   console.log(thirdFromEnd(main()));
//   middleTest();
//   cycle(main());
//   cycleTest();
//   sortTest();
// Mystery Program
// The program goes through a linked list and if a node's value is equal to the next node's value, it delete's that next node.
// The time complexity is O(n^2) as the program runs through the entire list because there is a nested while statement.

// function WhatDoesThisProgramDo(lst) {
//     let current = lst.head;
//     while (current !== null) {
//         let newNode = current;
//         while (newNode.next !== null) {
//             if (newNode.next.value === current.value) {
//                 newNode.next = newNode.next.next;
//             }
//             else {
//                 newNode = newNode.next;
//             }
//         }
//         current = current.next;
//     }
//     console.log(display(lst));
// }

// function mysteryList(){
//     let ML = new LinkedList();
  
//     ML.insertFirst('Apollo');
//     ML.insertLast('Boomer');
//     ML.insertLast('Helo');
//     ML.insertLast('Husker');
//     ML.insertLast('Tauhida');
//     ML.insertLast('Starbuck');
//     ML.insertLast('Tauhida');
//     ML.insertLast('Tauhida');
//     ML.insertLast('Tauhida');
//     ML.insertLast('Tauhida');
//     ML.insertLast('Husker');
//     ML.insertLast('Apollo');

//     return ML;
// }

// console.log(display(mysteryList()));
// WhatDoesThisProgramDo(mysteryList());
  