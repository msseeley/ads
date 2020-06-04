
const expect = require('chai').expect;
const DoublyLinkedList = require('../07_Linked_Lists/Doubly_Linked_List');
describe('Doubly Linked List Class', function () {
  describe('constructor', function () {
    const list = new DoublyLinkedList();
    it('has property head', function () {
      expect(list).to.have.property('head');
    })
    it('has the property tail', function () {
      expect(list).to.have.property('tail');
    })
    it('has the property length', function () {
      expect(list).to.have.property('length');
    })
  })

  describe('methods', function () {
    const list = new DoublyLinkedList();
    describe('has the following methods:', function () {
      it('push', function () {
        expect(list.push).to.be.a('function');
      })
      it('pop', function () {
        expect(list.pop).to.be.a('function');
      })
      it('shift', function () {
        expect(list.shift).to.be.a('function');
      })
      it('unshift', function () {
        expect(list.unshift).to.be.a('function');
      })
      it('get', function () {
        expect(list.get).to.be.a('function');
      })
      it('set', function () {
        expect(list.set).to.be.a('function');
      })
      it('insert', function () {
        expect(list.insert).to.be.a('function');
      })
      it('remove', function () {
        expect(list.remove).to.be.a('function');
      })
      it('reverse', function () {
        expect(list.reverse).to.be.a('function');
      })
    })
  })

  describe('push method', function () {
    const list = new DoublyLinkedList();
    it('assigns head and tail to first added node', function () {
      list.push('A');
      const node = { value: 'A', next: null, prev: null }
      expect(list.head).to.eql(node);
      expect(list.tail).to.eql(node);
    })
    it('adds additional nodes to tail', function () {
      list.push('B');
      expect(list.head.value).to.equal('A');
      expect(list.head.next).to.equal(list.tail);
      expect(list.tail.value).to.equal('B');
      expect(list.tail.prev).to.equal(list.head);
    })
    it('increments its length with every pushed node', function () {
      expect(list.length).to.equal(2);
      list.push('C');
      expect(list.length).to.equal(3);
    })
  })

  describe('pop method', function () {
    const list = new DoublyLinkedList();
    ['A', 'B', 'C'].forEach(val => list.push(val));
    it('decrements its length with every popped node', function () {
      expect(list.length).to.equal(3);
      list.pop();
      expect(list.length).to.equal(2);
    });
  })
})


