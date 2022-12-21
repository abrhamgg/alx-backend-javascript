import SignUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, filename) {
  const data = [];
  try {
    const createdUser = await SignUpUser(firstName, lastName);
    data.push({ status: 'fulfilled', value: createdUser });
    await uploadPhoto(filename);
  } catch (err) {
    data.push({
      status: 'rejected',
      value: `Error ${filename} cannot be processed`,
    });
  }
  return data;
}
