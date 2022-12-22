import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classes = [];
  const data = [19, 20, 34];
  for (const d of data) {
    classes.push(new ClassRoom(d));
  }
  return classes;
}
