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

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments/',
  Nearby = '/nearby'
}

export const MAX_CUNT_NEAR_PLACES = 3;

export const URL_MARKER_DEFAULT = '../img/pin.svg';

export const URL_MARKER_CURRENT = '../img/pin-active.svg';


