import { TypeOfferMock } from '../types/types-mock';

const offersMock: TypeOfferMock[] = [
  {
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    previewImage: 'https://14.react.pages.academy/static/offer/1.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
    ],
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    id:1,
    host : {
      'avatarUrl': 'img/1.png',
      'id': 3,
      'isPro': true,
      'name': 'Angelina'
    },
    location : {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'title': 'Waterfront with extraordinary view',
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.8,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 2,
    'price': 142,
    'goods': [
      'Влево',
      'Вправо'
    ],
  },
  {
    city: {
      name: 'Paris',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    previewImage: 'https://14.react.pages.academy/static/offer/2.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
    ],
    description: 'lightness of Amsterdam.',
    id:2,
    host : {
      'avatarUrl': 'img/2.png',
      'id': 3,
      'isPro': true,
      'name': 'Alina'
    },
    location : {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'title': 'Waterfront with extraordinary view',
    'isFavorite': true,
    'isPremium': false,
    'rating': 4.5,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 2,
    'price': 1426,
    'goods': [
      'Laptop friendly workspace',
      'Breakfast',
      'Wi-Fi',
      'Excursion'
    ],
  },{
    city: {
      name: 'Cologne',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    previewImage: 'https://14.react.pages.academy/static/offer/3.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
    ],
    'description': 'icturesque that hides behind a a river by the unique lightness of Cologne.',
    id:3,
    host : {
      'avatarUrl': 'img/2.png',
      'id': 3,
      'isPro': true,
      'name': 'Huina'
    },
    location : {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'isFavorite': false,
    'isPremium': true,
    'rating': 4,
    type: 'Apartment',
    'bedrooms': 1,
    'maxAdults': 2,
    'price': 147,
    'goods': [
      'an extra bed',
      'swimming pool',
      'Internet',
    ],
  },{
    city: {
      name: 'Hamburg',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    previewImage: 'https://14.react.pages.academy/static/offer/4.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/22.jpg',

    ],
    'description': 'A quind a a river by the unique lightness.',
    id:4,
    host : {
      'avatarUrl': 'img/2.png',
      'id': 3,
      'isPro': true,
      'name': 'Faina'
    },
    location : {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'title': 'Nice, cozy, warm big bed apartment',
    'isFavorite': true,
    'isPremium': false,
    'rating': 3,
    type: 'hotel',
    'bedrooms': 1,
    'maxAdults': 2,
    'price': 166,
    'goods': [
      'transport to the station',
      'Internet',
    ],
  },
];

export { offersMock };
