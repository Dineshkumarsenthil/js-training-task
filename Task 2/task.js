let students = [
  { id: 1, name: "Naveen", mark: 85, course: "MERN"   },
  { id: 2, name: "DK",   mark: 45, course: "Python" },
  { id: 3, name: "Bas",  mark: 72, course: "Java"   },
  { id: 4, name: "Gavi",   mark: 95, course: "React"  }
];


// Task 1 : Print All Students
for (let s of students) {
  console.log(s.id, s.name, s.mark, s.course);
}


// Task 2 : Pass / Fail 
for (let s of students) {
  if (s.mark >= 50) {
    console.log(s.name + " - Pass");
  } else {
    console.log(s.name + " - Fail");
  }
}


// Task 3 : Grade System 
for (let s of students) {
  if (s.mark >= 90) {
    console.log(s.name + " - A Grade");
  } else if (s.mark >= 75) {
    console.log(s.name + " - B Grade");
  } else if (s.mark >= 50) {
    console.log(s.name + " - C Grade");
  } else {
    console.log(s.name + " - Fail");
  }
}


// Task 4 : Topper Student 
let topper = students[0];

for (let s of students) {
  if (s.mark > topper.mark) {
    topper = s;
  }
}

console.log("Topper is " + topper.name + " - " + topper.mark);


// Task 5 : Course Search
for (let s of students) {
  if (s.course === "React") {
    console.log(s.id, s.name, s.mark, s.course);
  }
}


// Task 6 : Add New Student
students.push({ id: 5, name: "Rahul", mark: 88, course: "Node JS" });

for (let s of students) {
  console.log(s.id, s.name, s.mark, s.course);
}


// Task 7 : Attendance System 
let status = "present";

switch (status) {
  case "present": console.log("Welcome");        break;
  case "absent":  console.log("Mark Absent");    break;
  case "leave":   console.log("Approved Leave"); break;
  default:        console.log("Invalid Status");
}


// Task 8 : Login System 
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login Success");
} else {
  console.log("Invalid User");
}