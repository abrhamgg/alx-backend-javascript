import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const obj = {
    photo: null,
    user: null,
  };
  const photo = await uploadPhoto();
  const user = await createUser();
  obj.photo = photo;
  obj.user = user;
  return obj;
}
