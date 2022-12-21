import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  uploadPhoto()
    .then((body) => {
      createUser()
        .then((user) => {
          const out = `${body.body} ${user.firstName} ${user.lastName}`;
          console.log(out);
        }).catch(() => {
          console.log('Signup system offline');
        });
    }).catch(() => {
      console.log('Signup system offline');
    });
}
