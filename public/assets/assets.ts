import logo from './logo.svg';

import cross_icon from './cross_icon.svg';
import menu_icon from './menu_icon.svg';
import star_icon from './star_icon.svg';
import left_arrow from './left_arrow.svg';
import right_arrow from './right_arrow.svg';
import header_img from './header_img.png';
import brand_img from './brand_img.png';
import parent_m from './parent-m.svg';
import parent_f from './parent-f.svg';
import driver_m from './driver-m.svg';
import cis from './cis.png';
import nis from './nis.png';
import perspective from './perspective.png';
import qadam from './qadam.png';
import zerde from './zerde.png';

import mercedesbus from './mercedesbus.png'
// import ms1 from './ms1.jpg';
import ms2 from './ms2.jpg';
//shuttle bus astana
export const assets = {
  logo,

  cross_icon,
  menu_icon,
  star_icon,
  left_arrow,
  right_arrow,
  header_img,
  brand_img,

  cis,
  nis,
  perspective,
  qadam,
  zerde,
  // ms1,
  ms2,
  parent_m,
  parent_f,
  driver_m,
  mercedesbus
};


export const projectsData = [
  {
    title: 'CIS',
    price: 'Private',
    location: 'Астана',
    image: cis,
  },
  {
    title: 'NIS',
    price: 'Public',
    location: 'Астана',
    image: nis,
  },
  {
    title: 'Perspective School',
    price: 'Private',
    location: 'Астана',
    image: perspective,
  },
  {
    title: 'Qadam School',
    price: 'Private',
    location: 'Астана',
    image: qadam,
  },
  {
    title: 'Zerde School',
    price: 'Private',
    location: 'Астана',
    image: zerde,
  },
];

export const testimonialsData = [
  {
    name: 'Азамат Кенжебаев',
    title: 'Родитель',
    image: assets.parent_m,
    alt: 'Аватар отца',
    rating: 5,
    text: 'Отличный сервис! Водители всегда вовремя, автобус чистый, а дети в безопасности.',
  },
  {
    name: 'Айгуль Смагулова',
    title: 'Родитель',
    image: assets.parent_f,
    alt: 'Аватар матери',
    rating: 5,
    text: 'Очень довольны обслуживанием. Сын с радостью ездит в школу!',
  },
  {
    name: 'Ержан Сейдалин',
    title: 'Водитель',
    image: assets.driver_m,
    alt: 'Аватар водителя',
    rating: 5,
    text: 'Работаю в компании уже 2 года, доволен условиями и уважением к персоналу.',
  },
];
