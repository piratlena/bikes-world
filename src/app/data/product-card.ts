import { Card } from '../types/ProductCard';

export const ProductCards: Card[] = [
  {
    id: 1,
    isSoldOut: true,
    imgFlag: '../assets/flags/Italy.png',
    imgProduct: '../assets/bikes/Bianchi.png',
    title: 'Bianchi AQUILA L DURA ACE DI2 TEAM JUMBO 2021',
    price: 684840,
  },
  {
    id: 2,
    isSoldOut: true,
    imgFlag: '../assets/flags/USA.png',
    imgProduct: '../assets/bikes/Trek-verve.png',
    title: 'Trek Verve 2 Disc Lithium Grey HYBD 2022',
    price: 89300,
  },
  {
    id: 3,
    isSoldOut: false,
    imgFlag: '../assets/flags/USA.png',
    imgProduct: '../assets/bikes/Trek-Marlin.png',
    title: 'Trek Marlin 7 Matte Nautical Navy Matte Anth ATB 29 2022',
    price: 115000,
  },
];
