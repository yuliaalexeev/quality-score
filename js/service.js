var gSelectedPackage;
const gCurrentClassName = 'current';
const gCurrency = '$';
const gImagesPath = './assets/images/';

const gPackages = [
  {
    quantity: 1,
    retail_price: 58.00,
    price: 39.95,
    subscribe_price: 35.95,
    link: 'www.tracker.com/link-1',
    subscribe_link: 'www.tracker.com/subscribe-link-1',
    isBestSeller: false,
    isBestValue: false,
  },
  {
    quantity: 3,
    retail_price: 174.00,
    price: 102.00,
    subscribe_price: 91.80,
    link: 'www.tracker.com/link-3',
    subscribe_link: 'www.tracker.com/subscribe-link-3',
    isBestSeller: true,
    isBestValue: false,
  },
  {
    quantity: 6,
    retail_price: 348.00,
    price: 186.00,
    subscribe_price: 167.40,
    link: 'www.tracker.com/link-6',
    subscribe_link: 'www.tracker.com/subscribe-link-6',
    isBestSeller: false,
    isBestValue: true,
  },
];