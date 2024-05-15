// Exercise #1: Strict and Same
// Start commenting here
Object.is(10, 20); // Answer
Object.is(0, -0);
Object.is(NaN, 100);
Object.is("one", "two"); // Answer
Object.is({ name: "John", age: 30 }, { name: "John", age: 30 }); // Answer
Object.is(null, undefined);

10 === 20; // Answer
10 === "10";
3.14 !== 3.14;
"TechUp" !== "TechUp";
NaN === NaN;
0 !== -0; // Answer

let objectA = { course: "Web Developer", price: 300000 };
let objectB = { course: "Web Developer", price: 300000 };
objectA === objectB;

console.log(
  Object.is(10, 20),
  Object.is(0, -0),
  Object.is(NaN, 100),
  Object.is("one", "two"),
  Object.is({ name: "John", age: 30 }, { name: "John", age: 30 }),
  Object.is(null, undefined)
);
console.log(
  10 === 20,
  10 === "10",
  3.14 !== 3.14,
  "TechUp" !== "TechUp",
  NaN === NaN,
  0 !== -0
);
console.log(objectA === objectB);
