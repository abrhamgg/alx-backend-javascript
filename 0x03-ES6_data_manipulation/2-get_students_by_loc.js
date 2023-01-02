export default function getStudentsByLocation(students, location) {
  const filtered = students.filter((stu) => stu.location === location);
  return filtered;
}
