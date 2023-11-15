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


export enum Sorting {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',// От дешёвых к дорогим.
  HighToLow = 'Price: high to low',// От дорогих к дешёвым.
  TopRated = 'Top rated first',//От высокого рейтинга к низкому.
}

export const MAX_CUNT_NEAR_PLACES = 3;
// export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
export const URL_MARKER_DEFAULT = '../public/img/pin.svg';
// export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
export const URL_MARKER_CURRENT = '../public/img/pin-active.svg';


