function Stack() {
  this.contents = {};
  this.length = 0;
}

Stack.prototype.push = function(value) {
  this.contents[this.length] = value;
  this.length += 1;
};

Stack.prototype.pop = function() {
  const popped = this.contents[this.length - 1];
  delete this.contents[this.length - 1];
  this.length -= 1;
  return popped
};

Stack.prototype.forEach = function(callback) {
  while (this.length > 0) {
    callback(this.pop()) // length is updated by the pop method
  }
};



function Queue() {
  this.stack1 = new Stack;
  this.stack2 = new Stack;
}

Queue.prototype.enqueue = function(value) {
  if (this.stack2.length === 0) {
    this.stack1.push(value)
  }
  else {
    while (this.stack2.length > 0) {
      this.stack1.push(this.stack2.pop())
    }
    this.stack1.push(value)
  }
};

Queue.prototype.dequeue = function() {
  while (this.stack1.length > 0) {
    this.stack2.push(this.stack1.pop())
  }
  this.stack2.pop()
};


module.exports = { Stack, Queue };
