export default function getStudentIdsSum(students) {
  const initialValue = 0;
  const s = students.reduce((accumulator, value) => accumulator + value.id, initialValue);
  return s;
}
