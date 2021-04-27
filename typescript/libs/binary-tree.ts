interface IBinaryTree<T> {
  isEmpty(): boolean;
  createNode(value: T): void;
  value: T;
  left: IBinaryTree<T>;
  right: IBinaryTree<T>;
}

interface IBinaryTreeNode<T> {
  value: T;
  left: IBinaryTree<T>;
  right: IBinaryTree<T>;
}

export class BinaryTree<T> implements IBinaryTree<T> {
  private root: IBinaryTreeNode<T> = null;
  constructor(value?: T) {
    if (value) {
      this.createNode(value);
    }
  }

  public isEmpty(): boolean {
    return this.root === null;
  }

  public createNode(value: T): void {
    this.root = {
      value,
      left: new BinaryTree<T>(),
      right: new BinaryTree<T>(),
    };
  }

  get value(): T {
    return this.root.value;
  }

  set value(value: T) {
    this.root.value = value;
  }

  get left(): IBinaryTree<T> {
    return this.root.left;
  }

  set left(value: IBinaryTree<T>) {
    this.root.left = value;
  }

  get right(): IBinaryTree<T> {
    return this.root.right;
  }

  set right(value: IBinaryTree<T>) {
    this.root.right = value;
  }
}
