export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw Error('Cannot process');
  }
  for (const i of map) {
    try {
      if (i[1] === 1) {
        map.set(i[0], 100);
      }
    } catch (err) {
      throw (Error('Cannot process'));
    }
  }
}
