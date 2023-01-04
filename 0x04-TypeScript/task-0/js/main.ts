interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const stu1: Student = {
    firstName: "Abrham",
    lastName: "gg",
    age: 23,
    location: "addis"
}
const stu2: Student = {
    firstName: "Ab",
    lastName: "gg",
    age: 23,
    location: "addis"
}

const list: Array<Student> = [stu1, stu2];

console.log(`firstName - location`)
for (const s of list) {
    console.log(`${s.firstName} - ${s.location}`);
}