class MyNode<T> {
  constructor(public data: T, public next: MyNode<T> | undefined = undefined) {}
}

class LinkedList<T> {
  private head: MyNode<T> | undefined;

  public add(data: T): void {
    let newNode: MyNode<T> = new MyNode(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  public remove(): void {
    if (this.head == undefined) {
      return;
    }

    let deletedNode: MyNode<T>;
    deletedNode = this.head;

    this.head = this.head.next;
    deletedNode.next = undefined;
  }

  public printAll(): void {
    let node: MyNode<T> | undefined = this.head;

    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}

export { MyNode, LinkedList };
