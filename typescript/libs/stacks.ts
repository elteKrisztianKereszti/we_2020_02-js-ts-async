interface IStack<T> {
  push(value: T): void;
  pop(): T;
  top(): T;
  isEmpty(): boolean;
  isFull(): boolean;
}

class Stack<T> implements IStack<T> {
  private items: Array<T>;
  private size: number;
  private count: number;

  constructor(size: number) {
    this.items = new Array<T>(size);
    this.size = size;
    this.count = 0;
  }

  public push(value: T): void {
    if (this.isFull()) {
      throw new Error("Stack is full");
    }
    this.items[this.count++] = value;
  }

  public pop(): T {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }

    return this.items[--this.count];
  }
  public top(): T {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }

    return this.items[this.count - 1];
  }

  public isEmpty(): boolean {
    return this.count == 0;
  }

  public isFull(): boolean {
    return this.count == this.size;
  }
}

export { IStack, Stack };
