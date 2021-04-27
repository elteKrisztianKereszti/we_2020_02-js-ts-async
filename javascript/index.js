import { add, multiply } from "./math.js";
import faker from "faker";

// Tasks
// 1. Write an isPrime(n) function!
console.log('### Task #1');
function isPrime(n) {
  for (var i = 2; i <= n/2; ++i) {
    if (n % i == 0) {
      return false;
    }
  }

  return n > 1; 
}

for (var i = 1; i <= 100; ++i) {
  if (isPrime(i)) {
    console.log(i);
  }
}

const numbers = [ 1, 2, -4, 42, -8 ];

// 2. a. Own function
console.log('### Task #2');
function filterNegativeNumbers(nums) {
  const result = [];

  for (const item of nums) {
    if (item < 0) {
      result.push(item);
    }
  }

  return result;
}

console.log("2.a.", filterNegativeNumbers(numbers));

// 2. b. General function
function filter(nums, fn) {
  const result = [];

  for (const item of nums) {
    if (fn(item)) {
      result.push(item);
    }
  }

  return result;
}

console.log("2.b.", filter(numbers, function(e) {
  return e < 0;
}));

// 2. c. With array method (filter)
console.log("2.c. (anonym function)", numbers.filter(function(e) {
  return e < 0;
}));

console.log("2.a. (arrow)", numbers.filter((e) => e < 0));


// 3. Model an address structure with a JavaScript object! (object literal, dynamic object) Extend it with methods!
console.log('### Task #3');
var address = {
  city: 'Budapest',
  zip: '1234',
  street: 'Main street',
  houseNumber: 42,
  building: 'B',
  level: 2,
  door: 5,
  getAddress: function() {
    return this.zip + ' ' +
           this.city + ', ' +
           this.street + ' ' +
           this.houseNumber + 
           (this.building ? '/' + this.building + ' ' : ' ') +
           (this.level ? this.level + '/': '') +
           (this.door ? this.door : '');
  }
}
console.log(address);
console.log(address.getAddress());


// 4. Create constructors generating point and circle objects! (class, extends, prototype) 
// console.log('### Task #4 (class/extends)');
// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   getLocation() {
//     return this.x + ':' + this.y;
//   }
// }
// class Circle extends Point{
//   constructor(x, y, r) {
//     super(x, y);

//     this.r = r;
//   }

//   getArea() {
//     return this.r * this.r * Math.PI;
//   }

// }

// let point = new Point(10, 32);
// console.log(point.getLocation());
// let circle = new Circle(5, 6, 2);
// console.log(circle.getLocation());
// console.log(circle.getArea());

console.log('### Task #4 (prototype)');
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.getLocation = function() {
  return this.x + ':' + this.y;
}
  
let point = new Point(10, 32);
console.log(point.getLocation());

function Circle(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
}

Circle.prototype.getArea = function() {
  return this.r * this.r * Math.PI;
}
Circle.prototype.getLocation = Point.prototype.getLocation;

let circle = new Circle(5, 6, 2);
console.log(circle.getLocation());
console.log(circle.getArea());


// 5. Create a mathematical module with add and multiply functionality!
// Use this module in the main program! (module.exports, require)
console.log('### Task #5 (Math)');
console.log(add(10, 32));
console.log(multiply(6, 7));

console.log(faker.name.findName());