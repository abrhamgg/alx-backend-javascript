export default function getFullResponseFromAPI(success) {
  const promise = new Promise((resolve, reject) => {
    if (success == true) {
      const obj = { status: 200, body: 'Success' };
      resolve((obj) => obj);
    } else {
      reject('The fake API is not working currently');
    }
  });
}
