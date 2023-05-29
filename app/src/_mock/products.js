import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  'Academy3s Product 1',
  'Academy3s Product 2',
  'Academy3s Product 3',
  'Academy3s Product 4',
  'Academy3s Product 5',
  'Academy3s Product 6',
  'Academy3s Product 7',
  'Academy3s Product 8',
  'Academy3s Product 9',
  'Academy3s Product 10',
  'Academy3s Product 11',
  'Academy3s Product 12',
  'Academy3s Product 13',
  'Academy3s Product 14',
  'Academy3s Product 15',
  'Academy3s Product 16',
  'Academy3s Product 17',
  'Academy3s Product 18',
  'Academy3s Product 19',
  'Academy3s Product 20',
  'Academy3s Product 21',
  'Academy3s Product 22',
  'Academy3s Product 23',
  'Academy3s Product 24',
  // 'Nike Air Force 1 NDESTRUKT',
  // 'Nike Space Hippie 04',
  // 'Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear',
  // 'Nike Blazer Low 77 Vintage',
  // 'Nike ZoomX SuperRep Surge',
  // 'Zoom Freak 2',
  // 'Nike Air Max Zephyr',
  // 'Jordan Delta',
  // 'Air Jordan XXXV PF',
  // 'Nike Waffle Racer Crater',
  // 'Kyrie 7 EP Sisterhood',
  // 'Nike Air Zoom BB NXT',
  // 'Nike Air Force 1 07 LX',
  // 'Nike Air Force 1 Shadow SE',
  // 'Nike Air Zoom Tempo NEXT%',
  // 'Nike DBreak-Type',
  // 'Nike Air Max Up',
  // 'Nike Air Max 270 React ENG',
  // 'NikeCourt Royale',
  // 'Nike Air Zoom Pegasus 37 Premium',
  // 'Nike Air Zoom SuperRep',
  // 'NikeCourt Royale',
  // 'Nike React Art3mis',
  // 'Nike React Infinity Run Flyknit A.I.R. Chaz Bear',
];
const PRODUCT_COLOR = ['#00AB55', '#000000', '#FFFFFF', '#FFC0CB', '#FF4842', '#1890FF', '#94D82D', '#FFC107'];

// ----------------------------------------------------------------------

const products = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: `https://img.freepik.com/free-vector/isometric-online-education-round-concept-with-devices-online-training-graduation-cap-students-books-magnifier-alarm-clock-backpack-certificate-pencil-illustration_1284-51233.jpg?w=740&t=st=1677585836~exp=1677586436~hmac=dfae10f33f5073a33ef7ab45cfc054657f75f27894398e71d159daeeb34d6317`,
    name: PRODUCT_NAME[index],
    price: faker.datatype.number({ min: 1000, max: 10000, precision: 0.01 }),
    priceSale: setIndex % 3 ? null : faker.datatype.number({ min: 1000, max: 10000, precision: 0.01 }),
    colors:
      (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
      (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
      (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
      (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
      (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
      (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
      PRODUCT_COLOR,
    status: sample(['sale', 'new', '', '']),
  };
});

export default products;
