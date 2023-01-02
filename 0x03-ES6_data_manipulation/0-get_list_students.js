export default function getListStudents() {
  const obj = {
    firstName: 'Guillaume',
    id: 1,
    location: 'San Francisco',
  };
  const obj1 = {
    firstName: 'James',
    id: 2,
    location: 'Columbia',
  };
  const obj2 = {
    firstName: 'Serena',
    id: 5,
    location: 'San Francisco',
  };
  const list = [obj, obj1, obj2];
  return list;
}
