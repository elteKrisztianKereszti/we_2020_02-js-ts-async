// Tasks

// ### 1. Define a variable with each basic type!
let num: number;
num = 12;
// num = "sdf"; // invalid error
console.log(num);
let str: string;
let arrOfNums: Array<number>;

// ### 2. Count
// Define the count function, if we would like to use it in this way:

function count<T>(t: T[], fn: (number: T) => boolean): number {
  return t.filter(fn).length;
}
  
console.log(count([1, 11, 22, 4, 33], (e) => e % 2 === 0));
console.log(count(["apple", "pear", "plum"], (e) => e.startsWith("a")));
  
// 3. What is the difference between the var, let and const keywords?
// https://dzone.com/articles/javascript-difference-between-var-let-and-const-ke

// 4. Define the Square and Circle classes which implement a common interface called IShape!
import { IShape, Square, Circle } from './libs/shapes';
let square: IShape = new Square(11);
console.log("square area: ", square.getArea());

let circle: IShape = new Circle(3);
console.log("circle area: ", circle.getArea());


// 5. Define a generic Stack class!
import { Stack } from "./libs/stacks";

let stack: Stack<number> = new Stack(4);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.top());
console.log(stack.pop());
console.log(stack.top());
console.log(stack.pop());
console.log(stack);
stack.push(5);

// 6. Define a specific stack called OrderBook that can only store IOrder instances!
interface IOrder {
  stockNumber: string
}

class Order1 implements IOrder {
  constructor(
      public stockNumber: string,
      public cost: number
  ) { }
}

class Order2 implements IOrder {
  constructor(
      public stockNumber: string,
      public size: number
  ) { }
}

class OrderBook extends Stack<IOrder> { }

let orderBook: OrderBook = new OrderBook(4);
let order11: IOrder = new Order1('Stock11', 1);
let order12: IOrder = new Order1('Stock12', 10);
let order21: IOrder = new Order2('Stock21', 100);
let order22: IOrder = new Order2('Stock22', 1000);
orderBook.push(order11);
orderBook.push(order12);
orderBook.push(order21);
orderBook.push(order22);
console.log(orderBook);

// 7. Define a generic BinaryTree class!
import { BinaryTree } from './libs/binary-tree';

let bt: BinaryTree<number>, btForLeft: BinaryTree<number>, btForRight: BinaryTree<number>;
bt = new BinaryTree();
bt.createNode(3);

btForLeft = new BinaryTree(1);
btForRight = new BinaryTree(5);

bt.left = btForLeft;
bt.right = btForRight;

console.log(bt.value, bt.left.value, bt.right.value);
console.log(bt.left.left.isEmpty());

// 8. Define a generic LinkedList class!
import { LinkedList } from './libs/linked-list';

let linkedList: LinkedList<number> = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(666);
linkedList.add(42);
linkedList.remove();
linkedList.remove();
linkedList.printAll();

// 9. Put these solutions into multiple files with the right import/export syntax!

// 10. Define a [decorator] that adds a static field indicating that the subject has been decorated!


