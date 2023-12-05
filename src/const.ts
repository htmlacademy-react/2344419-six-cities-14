export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '/404'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum RequestStatus {
  Idle = 'IDLE',
  Pending = 'PENDING',
  Success = 'SUCCESS',
  Error = 'ERROR',
}

export const CityN = [
  'Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg','Dusseldorf'
];

export enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam ='Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf ='Dusseldorf',
}

export enum NameSpace {
  Offer = 'OFFER',
  Offers = 'OFFERS',
  NearPlaces = 'NEAR_PLACES',
  Favorites = 'FAVORITES',
  Reviews = 'REVIEWS',
  User = 'USER',
  City = 'CITY',
  Error = 'ERROR'
}


export enum Sorting {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',// От дешёвых к дорогим.
  HighToLow = 'Price: high to low',// От дорогих к дешёвым.
  TopRated = 'Top rated first',//От высокого рейтинга к низкому.
}

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments/',
  Nearby = '/nearby',
  Favorites = '/favorite'
}

export enum MONTH_NAMES {
  'January', 'February', 'March',
  'April', 'May', 'June', 'July',
  'August', 'September', 'October',
  'November', 'December'
}

export const MAX_LENGTH_COMMENT = 300;
export const MIN_LENGTH_COMMENT = 50;
export const DEFAULT_VALUE_NULL = 0;

export const MAX_CUNT_NEAR_PLACES = 3;
export const MAX_LENGTH_REVIEW = 10;

export const URL_MARKER_DEFAULT = '../img/pin.svg';

export const URL_MARKER_CURRENT = '../img/pin-active.svg';
export const DEFAULT_CITY = CityName.Paris;
export const DEFAULT_SORTING = 'Popular';

