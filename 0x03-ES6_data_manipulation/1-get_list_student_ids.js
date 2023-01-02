export default function getListStudentIds(data) {
  if (data instanceof Object) {
    const m = data.map((i) => i.id);
    return m;
  }
  return [];
}
