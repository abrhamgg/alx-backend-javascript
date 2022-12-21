import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const obj = {
    photo: null,
    user: null,
  };
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    obj.photo = photo;
    obj.user = user;
    return obj;
  } catch (err) {
    return obj;
  }
}
