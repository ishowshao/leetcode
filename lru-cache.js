/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.kv = new Map();
    this.head = { val: null, key: null, prev: null, next: null };
    this.tail = { val: null, key: null, prev: this.head, next: null };
    this.head.next = this.tail;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.kv.has(key)) {
        const node = this.kv.get(key);

        node.prev.next = node.next;
        node.next.prev = node.prev;

        node.prev = this.tail.prev;
        node.next = this.tail;
        this.tail.prev.next = node;
        this.tail.prev = node;

        return node.val;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.kv.has(key)) {
        this.get(key);
        this.kv.get(key).val = value;
        return;
    }
    const node = { val: value, key: key, prev: null, next: null };

    if (this.kv.size === this.capacity) {
        const toRemove = this.head.next;
        this.head.next = toRemove.next;
        toRemove.next.prev = this.head;

        this.kv.delete(toRemove.key);
    }

    this.kv.set(key, node);

    node.prev = this.tail.prev;
    node.next = this.tail;
    this.tail.prev.next = node;
    this.tail.prev = node;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

var obj = new LRUCache(2);
// console.log(obj);
// obj.get(2);
obj.put(1, 1);
obj.put(2, 2);
obj.put(3, 3);
obj.get(2);
console.log(obj);
// obj.get(1);
// obj.put(1, 5);
// console.log(obj);
// obj.put(1, 2);
// console.log(obj);
// obj.get(1);
// obj.get(2);
// obj.get(2);
// obj.put(3,2);
// obj.get(2);
// obj.get(3);