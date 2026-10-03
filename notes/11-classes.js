class MinStack {
  constructor() {
    this.stack = [];
    this.mins = [];
  }
  push(val) {
    this.stack.push(val);
    this.mins.push(Math.min(val, this.mins.length ? this.mins.at(-1) : val));
  }
  pop() { this.stack.pop(); this.mins.pop(); }
  top() { return this.stack.at(-1); }
  getMin() { return this.mins.at(-1); }
}

// Trie node
class TrieNode {
  constructor() {
    this.children = {};
    this.end = false;
  }
}