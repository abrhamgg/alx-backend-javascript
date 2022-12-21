const stocks = {
  fruits: ['strawberry', 'grapes', ' banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};

const is_shop_open = true;

const order = (time, work) => new Promise((resolve, reject) => {
  if (is_shop_open) {
    setTimeout(() => {
      resolve((work()));
    }, time);
  } else {
    reject(console.log('shop is closed'));
  }
});

order(2000, () => console.log(`${stocks.fruits[0]}`));
