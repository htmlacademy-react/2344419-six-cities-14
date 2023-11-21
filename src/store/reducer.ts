import {createReducer} from '@reduxjs/toolkit';
import { TypeOffer, TypeReview } from '../types/types-mock';
import { dropOffer, fetchFavorites, setActiveCity, setOffers, fetchAuthorization } from './action';
import { CityName, AuthorizationStatus, RequestStatus } from '../const';
import { fetchCommentsAction, fetchNearbyPlaces, fetchOfferAction, fetchOffersAction } from '../services/api-actions';


export const DEFAULT_CITY = CityName.Paris;

type InstialState = {
  offers: TypeOffer[];
  offersFetchingstatus:RequestStatus;
  nearPlaces: TypeOffer[];
  reviews: TypeReview[];
  offer: TypeOffer | undefined;
  favorites: TypeOffer[];
  activeCity: CityName;
  authorizationStatus:string;
};

const instialState:InstialState = {
  offers:[],//offers.filter((offer)=> offer.city.name === DEFAULT_CITY as string),
  offersFetchingstatus:RequestStatus.Idle,
  nearPlaces:[],
  reviews:[],
  offer:undefined,
  favorites:[],// offers.filter((offer)=>offer.isFavorite),
  activeCity:DEFAULT_CITY,
  authorizationStatus:AuthorizationStatus.Unknown,
};

const reducer = createReducer(instialState,(builder) =>{
  builder
    .addCase(fetchOffersAction.pending,(state) =>{
      state.offersFetchingstatus = RequestStatus.Pending;
    })
    .addCase(fetchOffersAction.fulfilled,(state, action) =>{
      state.offersFetchingstatus = RequestStatus.Success;
      state.offers = action.payload;
    })
    .addCase(fetchOffersAction.rejected,(state) =>{
      state.offersFetchingstatus = RequestStatus.Error;
    })
    .addCase(fetchOfferAction.fulfilled,(state, action) =>{
      state.offer = action.payload;
    })
    .addCase(setOffers,(state, action) =>{
      state.offers = action.payload;
    })
    .addCase(fetchNearbyPlaces.fulfilled,(state,action)=>{
      state.nearPlaces = action.payload;
    })
    .addCase(fetchCommentsAction.fulfilled, (state, action)=>{
      state.reviews = action.payload;
    })
    .addCase(dropOffer, (state)=>{
      state.offer = undefined;
      state.nearPlaces = [];
    })
    .addCase(setActiveCity,(state, action)=>{
      state.activeCity = action.payload;
    })
    .addCase(fetchFavorites, (state)=>{
      state.favorites = state.offers.filter((offer)=>offer.isFavorite);
    })
    .addCase(fetchAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });

});

export { reducer };
