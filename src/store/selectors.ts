import { AuthorizationStatus, NameSpace } from '../const';
import { State } from '../types/state';
import { TypeOffer } from '../types/types-data';

export const getOffers = (state:State):TypeOffer[]=>state[NameSpace.Offers].offers;
export const getOffer = (state:State):TypeOffer|undefined=>state[NameSpace.Offer].offer;
export const getActiveCyty = (state:State) =>state[NameSpace.City].activeCity;
export const getReviews = (state:State)=> state[NameSpace.Reviews].reviews;
export const getNearPlaces = (state:State)=> state[NameSpace.NearPlaces].nearPlaces;
export const getOfferFetchingstatus = (state:State)=> state[NameSpace.Offer].offerFetchingstatus;
export const getOffersFetchingstatus = (state:State)=> state[NameSpace.Offers].offersFetchingstatus;
export const getOfferId = (state:State)=> state[NameSpace.Offer].offerId;
export const getFavorites = (state:State)=> state[NameSpace.Favorites].favorites;
export const getAuthorizationStatus = (state:State):AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getUser = (state:State)=> state[NameSpace.User].user;
