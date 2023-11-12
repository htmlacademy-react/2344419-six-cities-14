export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum CityName {
  Amsterdam ='Amsterdam',
  Paris = 'Paris',
  Cologne = 'Cologne',
  Hamburg = 'Hamburg',
  Dusseldorf ='Dusseldorf',
  Brussels = 'Brussels',
}

export enum NameSpace {
  Offer = 'OFFER',
  Offers = 'OFFERS',
  NearPlaces = 'NEAR_PLACES',
  Favorites = 'FAVORITES',
  Reviews = 'REVIEWS',
  User = 'USER',
  City = 'CITY',
  Point = 'POINT'
}

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
