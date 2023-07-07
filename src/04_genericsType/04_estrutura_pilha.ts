export class Person<T, U> {
  constructor(name: T, public age: U) {}
}

export class Stack<T> {
  private count = 0;
  private elements: { [k: number]: T } = {};

  push(elements: T): void {
    this.elements[this.count] = elements;
    this.count++;
  }
  peek(): void {
    for (const key in this.elements) {
      console.log(this.elements[key]);
    }
  }
  pop(): T | void {
    if (this.isEmpty()) return undefined;
    this.count--;
    const elem = this.elements[this.count];
    delete this.elements[this.count];
    return elem;
  }
  isEmpty(): boolean {
    return this.count === 0;
  }
  size(): number {
    return this.count;
  }
}
const stack = new Stack<string | number>();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(5);
stack.peek();
stack.push(4);
stack.pop();
stack.peek();
stack.push(5);
stack.push(4);
stack.push(4);
stack.push(4);
stack.peek();
while (!stack.isEmpty()) {
  console.log(stack.pop());
}
