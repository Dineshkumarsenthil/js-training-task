// Task 1 : Array Basics 

let arr = [10, 20, 30, 40, 50];
console.log(arr[0]);              
console.log(arr[arr.length - 1]); 
console.log(arr.length);          

// Task 2 : Push & Pop 

let arr2 = [1, 2, 3];
arr2.push(4, 5);   
arr2.pop();       

console.log(arr2);
// Output:
// [1, 2, 3, 4]


// Task 3 : Includes Check 

let skills = ["html", "css", "javascript", "react"];

console.log(skills.includes("javascript"));
// Output:
// true

let emp = [
  { name: "A", salary: 10000 },
  { name: "B", salary: 50000 },
  { name: "C", salary: 30000 }
];

// Task 4 : Filter Salaries

let highSalary = emp.filter((e) => {
  return e.salary > 20000;
});

console.log(highSalary);
// Output:
// [ { name: 'B', salary: 50000 }, { name: 'C', salary: 30000 } ]


// Task 5 : Map Names 

let names = emp.map((e) => {
  return e.name;
});

console.log(names);
// Output:
// ['A', 'B', 'C']


//  Task 6 : Reduce Sum 

let totalSalary = emp.reduce((acc, e) => {
  return acc + e.salary;
}, 0);

console.log(totalSalary);
// Output:
// 90000


// Task 7 : Remove Duplicates 

let dupArr = [1, 2, 2, 3, 4, 4, 5];

let unique = [];

for (let val of dupArr) {
  if (!unique.includes(val)) {
    unique.push(val);
  }
}

console.log(unique);
// Output:
// [1, 2, 3, 4, 5]


// Task 8 : Find Largest Number

let nums = [10, 200, 5, 90];

let largest = nums[0];

for (let val of nums) {
  if (val > largest) {
    largest = val;
  }
}

console.log(largest);
// Output:
// 200


// Task 9 : Reverse String WITHOUT reverse()

let str = "hello";

let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversed = reversed + str[i];
}

console.log(reversed);
// Output:
// olleh

// Task 10 : Group by Salary

let empList = [
  { name: "A", salary: 10000 },
  { name: "B", salary: 50000 },
  { name: "C", salary: 10000 }
];

let grouped = {};

for (let e of empList) {
  if (grouped[e.salary]) {
    grouped[e.salary].push(e.name);
  } else {
    grouped[e.salary] = [e.name];
  }
}

console.log(grouped);
// Output:
// { '10000': ['A', 'C'], '50000': ['B'] }


// Task 11 : Flatten Array (without flat()) 

let nested = [1, [2, [3, [4]]]];

let flatArr = [];

function flatten(arr) {
  for (let val of arr) {
    if (Array.isArray(val)) {
      flatten(val);      
    } else {
      flatArr.push(val); 
    }
  }
}

flatten(nested);
console.log(flatArr);
// Output:
// [1, 2, 3, 4]


// Task 12 : Custom Sort Descending

let sortArr = [5, 2, 9, 1];

sortArr.sort((a, b) => {
  return b - a; 
});

console.log(sortArr);
// Output:
// [9, 5, 2, 1]


// Task 13 : Find Second Largest

let numArr = [10, 50, 20, 40];

numArr.sort((a, b) => b - a); 

console.log(numArr[1]);
// Output:
// 40


// Task 14 : Count Characters 

let charStr = "aabbccdde";

let count = {};

for (let ch of charStr) {
  if (count[ch]) {
    count[ch] = count[ch] + 1; 
  } else {
    count[ch] = 1;              
  }
}

console.log(count);
// Output:
// { a: 2, b: 2, c: 2, d: 2, e: 1 }