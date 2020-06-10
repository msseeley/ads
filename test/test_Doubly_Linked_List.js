
const expect = require('chai').expect;
const DoublyLinkedList = require('../07_Linked_Lists/Doubly_Linked_List');

describe('Doubly Linked List Class', function () {
  const list = new DoublyLinkedList();

  describe('constructor', function () {
    it('has property head', function () {
      expect(list).to.have.property('head');
    });
    it('has the property tail', function () {
      expect(list).to.have.property('tail');
    });
    it('has the property length', function () {
      expect(list).to.have.property('length');
    });
  });

  describe('has the following methods:', function () {
    it('push', function () {
      expect(list.push).to.be.a('function');
    });
    it('pop', function () {
      expect(list.pop).to.be.a('function');
    });
    it('shift', function () {
      expect(list.shift).to.be.a('function');
    });
    it('unshift', function () {
      expect(list.unshift).to.be.a('function');
    });
    it('get', function () {
      expect(list.get).to.be.a('function');
    });
    it('set', function () {
      expect(list.set).to.be.a('function');
    });
    it('insert', function () {
      expect(list.insert).to.be.a('function');
    });
    it('remove', function () {
      expect(list.remove).to.be.a('function');
    });
    it('reverse', function () {
      expect(list.reverse).to.be.a('function');
    });
  });

  describe('push', function () {
    const list1 = new DoublyLinkedList();
    it('assigns head and tail to first added node', function () {
      list1.push('A');
      const node = { value: 'A', next: null, prev: null }
      expect(list1.head).to.eql(node);
      expect(list1.tail).to.eql(node);
    });

    it('adds additional nodes to tail', function () {
      list1.push('B');
      expect(list1.head.value).to.equal('A');
      expect(list1.head.next).to.equal(list1.tail);
      expect(list1.tail.value).to.equal('B');
      expect(list1.tail.prev).to.equal(list1.head);
    });

    it('increments its length with every pushed node', function () {
      expect(list1.length).to.equal(2);
      list1.push('C');
      expect(list1.length).to.equal(3);
    });

  });

  describe('pop', function () {
    let list2 = new DoublyLinkedList();

    ['A', 'B', 'C', 'D', 'E'].forEach(val => list2.push(val));
    let popped;

    it('decrements its length with every popped node', function () {
      expect(list2.length).to.equal(5);
      popped = list2.pop();
      expect(list2.length).to.equal(4);
    });

    it('reassigns tail', function () {
      expect(list2.tail.value).to.equal('D');
    });

    it('returns the popped value', function () {
      expect(popped).to.eql({ value: 'E', prev: null, next: null });
    });

    it('returns undefined if list is empty', function () {
      list2 = new DoublyLinkedList();
      expect(list2.pop()).to.equal(undefined);
    });

    it('reassigns head, tail, and length when last element is popped off', function () {
      list2.push(1);
      list2.pop();
      expect(list2.head).to.equal(null);
      expect(list2.tail).to.equal(null);
      expect(list2.length).to.equal(0);
    });

  });

  describe('shift', function () {
    let list3 = new DoublyLinkedList();

    ['F', 'G', 'H', 'I', 'J'].forEach(val => list3.push(val));

    const shifted = list3.shift();

    it('returns the shifted node', function () {
      expect(shifted).to.eql({ value: 'F', prev: null, next: null });
    });

    it('reassigns head', function () {
      expect(list3.head.value).to.equal('G');
    });

    it('decrements its length', function () {
      expect(list3.length).to.equal(4);
    });

    it('reassigns head and tail for single remaining node', function () {
      list3.shift();
      list3.shift();
      list3.shift();
      expect(list3.head).to.equal(list3.tail);
    });
    it('it returns undefined on an empty list', function () {
      list3.shift();
      expect(list3.shift()).to.equal(undefined);
    });
  });

  describe('unshift', function () {
    let list4 = new DoublyLinkedList();

    list4.unshift('K');
    list4.unshift('L');
    list4.unshift('M');

    it('increments length property', function () {
      expect(list4.length).to.equal(3);
    });

    it('assigns the head and tail properly', function () {
      expect(list4.head.value).to.equal('M');
      expect(list4.tail.value).to.equal('K');
    });

    it('increments length', function () {
      expect(list4.length).to.equal(3);
    });

  });

  describe('get', function () {
    let list5 = new DoublyLinkedList();

    ['O', 'P', 'Q', 'R', 'S'].forEach(val => list5.push(val));

    const gotten = list5.get(2);

    it('returns the value at the index specified', function () {
      expect(gotten).to.be.a('object');
      expect(gotten.value).to.equal('Q');
    });

    it('returns undefined for indexes that do not exist', function () {
      expect(list5.get(-2)).to.equal(undefined);
      expect(list5.get(7)).to.equal(undefined);
    });

    it('does not affect the length or order of the list', function () {
      expect(list5.length).to.equal(5);
      expect(gotten.next.value).to.equal('R');
      expect(gotten.prev.value).to.equal('P');
    });

  });

  describe('set', function () {
    let list6 = new DoublyLinkedList();
    ['T', 'U', 'V'].forEach(val => list6.push(val));
    const previousValue = list6.get(1).value;
    const previousNode = list6.get(1);

    it('sets the value of the position', function () {
      list6.set(1, 'Z');
      const currentValue = list6.get(1).value;
      expect(previousValue).to.not.equal(currentValue);
    });

    it('keeps the same node and does not replace it with another node', function () {
      const currentNode = list6.get(1);
      expect(previousNode).to.equal(currentNode);
    });

    it('returns undefined if set index is not valid', function () {
      expect(list6.get(-2, 'Y')).to.equal(undefined);
    });

  });

  describe('insert', function () {
    let list7 = new DoublyLinkedList();
    [1, 2, 3, 4, 5, 6].forEach(val => list7.push(val));

    it('inserts the node at the correct position', function () {
      list7.insert(8, 6);
      list7.insert(7, 6);
      expect(list7.get(7).value).to.equal(8);
      expect(list7.get(6).value).to.equal(7);
      list7.insert(12, 3);
      expect(list7.get(2).next.value).to.equal(12);
      expect(list7.get(4).value).to.equal(4);
    });

    it('inserts a new node into the list', function () {
      const original = list7.get(0);
      list7.insert(1, 0);
      expect(list7.get(0)).to.not.equal(original);
    });

    it('increments the length of the list', function () {
      expect(list7.length).to.equal(10);
    })
  })

  describe('remove', function () {
    let list8 = new DoublyLinkedList();
    const prevLength = list8.length;
    [10, 11, 12, 13, 14].forEach(val => list8.push(val))
    list8.remove(0);
    it('decrements the length of the list', () => {
      expect(list8.length).to.not.equal(prevLength);
      expect(list8.length).to.equal(4);
    });

    it('removes properly reassigns next and prev pointers of remaining nodes', () => {
      const before = list8.get(2);
      list8.remove(2); //[11, 12,  14]
      const after = list8.get(2);
      expect(before).to.not.equal(after);
      expect(before.prev).to.equal(after.prev);
      expect(before.prev.next).to.equal(after);
    });
  });

  describe('reverse', () => {
    const list8 = new DoublyLinkedList();
    ['C', 'O', 'O', 'L', '_', 'B', 'E', 'A', 'N', 'S'].forEach(val => list8.push(val));
    const head = list8.head;
    const tail = list8.tail;
    list8.reverse();
    it('reassigns the head and the tail', () => {
      expect(list8.head).to.equal(tail);
      expect(list8.tail).to.equal(head);
    });
    it('reverses pointers and positions accordingly', () => {
      const space = list8.get(5);
      const B = list8.get(4);
      const E = list8.get(3);
      expect(space.value).to.equal('_');
      expect(B.value).to.equal('B');
      expect(E.value).to.equal('E');
      expect(B.prev).to.equal(E);
      expect(B.next).to.equal(space);
    });
  })
});


