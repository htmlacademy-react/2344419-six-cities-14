import { TypeReviewMock } from '../types/types-mock';

const reviewsMock: TypeReviewMock[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Tue Oct 24 2023 16:37:40 GMT+0300 (Москва, стандартное время)',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'img/1.png',
      id: 1,
      isPro: false,
      name: 'Oliver.conner'
    }
  },
  {
    comment: 'Home is amazing. It\'s like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius',
    date: 'Tue Oct 14 2023 12:38:40 GMT+0300 (Москва, стандартное время)',
    id: 2,
    rating: 3,
    user: {
      avatarUrl: 'img/2.png',
      id: 6,
      isPro: false,
      name: 'Kendall'
    }
  },
  {
    comment: 'The rooms, furnishings and artworks are incredible.',
    date: 'Tue Oct 23 2021 10:31:40 GMT+0300 (Москва, стандартное время)',
    id: 3,
    rating: 5,
    user: {
      avatarUrl: 'img/9.png',
      id: 6,
      isPro: true,
      name: 'Hally' }
  },
  {
    comment: 'Good',
    date: 'Tue Oct 1 2020 22:38:40 GMT+0300 (Москва, стандартное время)',
    id: 1,
    rating: 4.5,
    user: {
      avatarUrl: 'img/5.png',
      id: 6,
      isPro: false,
      name: 'Burbomyd'
    }
  },
];

export { reviewsMock };
