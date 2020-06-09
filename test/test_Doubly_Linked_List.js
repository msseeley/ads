
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
    const list_1 = new DoublyLinkedList();
    it('assigns head and tail to first added node', function () {
      list_1.push('A');
      const node = { value: 'A', next: null, prev: null }
      expect(list_1.head).to.eql(node);
      expect(list_1.tail).to.eql(node);
    });

    it('adds additional nodes to tail', function () {
      list_1.push('B');
      expect(list_1.head.value).to.equal('A');
      expect(list_1.head.next).to.equal(list_1.tail);
      expect(list_1.tail.value).to.equal('B');
      expect(list_1.tail.prev).to.equal(list_1.head);
    });

    it('increments its length with every pushed node', function () {
      expect(list_1.length).to.equal(2);
      list_1.push('C');
      expect(list_1.length).to.equal(3);
    });

  });

  describe('pop', function () {
    let list_2 = new DoublyLinkedList();

    ['A', 'B', 'C', 'D', 'E'].forEach(val => list_2.push(val));
    let popped;

    it('decrements its length with every popped node', function () {
      expect(list_2.length).to.equal(5);
      popped = list_2.pop();
      expect(list_2.length).to.equal(4);
    });

    it('reassigns tail', function () {
      expect(list_2.tail.value).to.equal('D');
    });

    it('returns the popped value', function () {
      expect(popped).to.eql({ value: 'E', prev: null, next: null });
    });

    it('returns undefined if list is empty', function () {
      list_2 = new DoublyLinkedList();
      expect(list_2.pop()).to.equal(undefined);
    });

    it('reassigns head, tail, and length when last element is popped off', function () {
      list_2.push(1);
      list_2.pop();
      expect(list_2.head).to.equal(null);
      expect(list_2.tail).to.equal(null);
      expect(list_2.length).to.equal(0);
    });

  });

  describe('shift', function () {
    let list_3 = new DoublyLinkedList();

    ['F', 'G', 'H', 'I', 'J'].forEach(val => list_3.push(val));

    const shifted = list_3.shift();

    it('returns the shifted node', function () {
      expect(shifted).to.eql({ value: 'F', prev: null, next: null });
    });

    it('reassigns head', function () {
      expect(list_3.head.value).to.equal('G');
    });

    it('decrements its length', function () {
      expect(list_3.length).to.equal(4);
    });

    it('reassigns head and tail for single remaining node', function () {
      list_3.shift();
      list_3.shift();
      list_3.shift();
      expect(list_3.head).to.equal(list_3.tail);
    });
    it('it returns undefined on an empty list', function () {
      list_3.shift();
      expect(list_3.shift()).to.equal(undefined);
    });
  });

  describe('unshift', function () {
    let list_4 = new DoublyLinkedList();

    list_4.unshift('K');
    list_4.unshift('L');
    list_4.unshift('M');

    it('increments length property', function () {
      expect(list_4.length).to.equal(3);
    });

    it('assigns the head and tail properly', function () {
      expect(list_4.head.value).to.equal('M');
      expect(list_4.tail.value).to.equal('K');
    });

    it('increments length', function () {
      expect(list_4.length).to.equal(3);
    });

  });

  describe('get', function () {
    let list_5 = new DoublyLinkedList();

    ['O', 'P', 'Q', 'R', 'S'].forEach(val => list_5.push(val));

    const gotten = list_5.get(2);

    it('returns the value at the index specified', function () {
      expect(gotten).to.be.a('object');
      expect(gotten.value).to.equal('Q');
    });

    it('returns undefined for indexes that do not exist', function () {
      expect(list_5.get(-2)).to.equal(undefined);
      expect(list_5.get(7)).to.equal(undefined);
    });

    it('does not affect the length or order of the list', function () {
      expect(list_5.length).to.equal(5);
      expect(gotten.next.value).to.equal('R');
      expect(gotten.prev.value).to.equal('P');
    });

  });

  describe('set', function () {
    let list_6 = new DoublyLinkedList();
    ['T', 'U', 'V'].forEach(val => list_6.push(val));
    const previousValue = list_6.get(1).value;
    const previousNode = list_6.get(1);

    it('sets the value of the position', function () {
      list_6.set(1, 'Z');
      const currentValue = list_6.get(1).value;
      expect(previousValue).to.not.equal(currentValue);
    });

    it('keeps the same node and does not replace it with another node', function () {
      const currentNode = list_6.get(1);
      expect(previousNode).to.equal(currentNode);
    });

    it('returns undefined if set index is not valid', function () {
      expect(list_6.get(-2, 'Y')).to.equal(undefined);
    });

  });

  describe('insert', function () {
    let list_7 = new DoublyLinkedList();
    [1, 2, 3, 4, 5, 6].forEach(val => list_7.push(val));

    it('inserts the node at the correct position', function () {
      list_7.insert(8, 6);
      list_7.insert(7, 6);
      expect(list_7.get(7).value).to.equal(8);
      expect(list_7.get(6).value).to.equal(7);
      list_7.insert(12, 3);
      expect(list_7.get(2).next.value).to.equal(12);
      expect(list_7.get(4).value).to.equal(4);
    });

    it('inserts a new node into the list', function () {
      const original = list_7.get(0);
      list_7.insert(1, 0);
      expect(list_7.get(0)).to.not.equal(original);
    });
  })

  describe(remove, function () {
    it('', function () { });
  })
});


