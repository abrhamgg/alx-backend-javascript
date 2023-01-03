export default function cleanSet(set, startString) {
  const str = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const val of set.values()) {
    if (typeof val === 'string' && val.startsWith(startString)) {
      const substr = val.substring(startString.length);
      if (substr && substr !== val) {
        str.push(substr);
      }
    }
  }
  return str.join('-');
}
