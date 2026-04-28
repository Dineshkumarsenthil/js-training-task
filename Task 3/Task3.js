// Task 1 : Student Form Function 
function studentForm(name, age, course) {
    console.log("Name: "   + name);
    console.log("Age: "    + age);
    console.log("Course: " + course);
}
 
studentForm("Dineshkumar S", 22, "AWS");
// Output:
// Name: Dineshkumar S
// Age: 22
// Course: AWS

// Task 2 : Calculator Function
function calc(a, b) {
    console.log("Addition: "       + (a + b));
    console.log("Subtraction: "    + (a - b));
    console.log("Multiplication: " + (a * b));
}
 
calc(10, 5);
// Output:
// Addition: 15
// Subtraction: 5
// Multiplication: 50

// Task 3 : Reusable Greeting
function greet(name) {
    console.log("Hello " + name);
}
 greet("DK");
greet("BAS");
greet("GAVI");
// Output:
// Hello DK
// Hello BAS
// Hello GAVI

// Task 4 : Return Value
function square(num) {
    return num * num;
}
 
console.log(square(5));
// Output:
// 25

// Task 5 : Scope Check 
function scopeCheck() {
    let secret = "javascript";
    console.log(secret); 
}
 
scopeCheck();
 
// Output:
// javascript


// Task 6 : Merge Arrays 
let boys  = ["car", "bike"];
let girls = ["doll", "teddy"];
 
let toys = [...boys, ...girls];
 
console.log(toys);
// Output:
// ['car', 'bike', 'doll', 'teddy']
 
 
//  Task 7 : Unlimited Numbers 
function sumAll(...nums) {
    let total = 0;
    for (let n of nums) {
        total = total + n;
    }
    console.log(total);
}
 
sumAll(10, 20, 30, 40);
// Output:
// 100
 
 
// Task 8 : Array Destructuring 
let colors = ["red", "green", "blue"];
 
let [c1, c2, c3] = colors;
 
console.log(c1, c2, c3);
// Output:
// red green blue
 
 
// Task 9 : Object Destructuring 
let emp = {
    name:   "Dineshkumar",
    role:   "Developer",
    salary: "5LPA"
};
 
let { name, role, salary } = emp;
 
console.log(name, role);
// Output:
// Dineshkumar Developer
 
 
// Task 10 : Offer Generator
function* offerGen() {
    yield "10% cashback";
    yield "20% cashback";
    yield "50% cashback";
    yield "Try again";
}
 
let offer = offerGen();
 
console.log(offer.next().value);   
console.log(offer.next().value);   
console.log(offer.next().value);   
console.log(offer.next().value);   
 
let last = offer.next();
if (last.done) {
    console.log("No more offers");
}
// Output:
// 10% cashback
// 20% cashback
// 50% cashback
// Try again
// No more offers
 

// Task 11 : Curry Function
function add(a) {
    return function(b) {
        return function(c) {
            console.log(a + b + c);
        }
    }
}
 
add(10)(20)(30);
// Output:
// 60
 
 
// Task 12 : Student Marks Analyzer 
function marks(...nums) {
    let total = 0;
    for (let n of nums) {
        total = total + n;
    }
    let average = total / nums.length;
    console.log("Total = "   + total);
    console.log("Average = " + average);
}
 
marks(80, 90, 70, 60);
// Output:
// Total = 300
// Average = 75
 
 
// CHALLENGE – Employee Registration   
 
function register(name, role, ...skills) {
    console.log("Name: "   + name);
    console.log("Role: "   + role);
    console.log("Skills: " + skills.join(" "));
}
 
register("Dineshkumar", "Frontend", "HTML", "CSS", "JS", "React");
// Output:
// Name: Dineshkumar 
// Role: Frontend
// Skills: HTML CSS JS React