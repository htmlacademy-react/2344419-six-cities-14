import {createReducer} from '@reduxjs/toolkit';
import { TypeOffer, TypeReview } from '../types/types-data';
import { dropOffer, fetchFavorites, setActiveCity, setOffers, fetchAuthorization, setError } from './action';
import { CityName, AuthorizationStatus, RequestStatus } from '../const';
import { fetchCommentsAction, fetchNearbyPlaces, fetchOfferAction, fetchOffersAction } from '../services/api-actions';


export const DEFAULT_CITY = CityName.Paris;

type InstialState = {
  offers: TypeOffer[];
  offersFetchingstatus:RequestStatus;
  nearPlaces: TypeOffer[];
  nearbyFetchingstatus: RequestStatus;
  reviews: TypeReview[];
  comentFetchingstatus:RequestStatus;
  offer: TypeOffer | undefined;
  offerFetchingstatus:RequestStatus;
  favorites: TypeOffer[];
  activeCity: CityName;
  authorizationStatus:AuthorizationStatus;
 error:string|null;

};

const instialState:InstialState = {
  offers:[],//offers.filter((offer)=> offer.city.name === DEFAULT_CITY as string),
  offersFetchingstatus:RequestStatus.Idle,
  nearPlaces:[],
  nearbyFetchingstatus: RequestStatus.Idle,
  reviews:[],
  comentFetchingstatus:RequestStatus.Idle,
  offer:undefined,
  offerFetchingstatus:RequestStatus.Idle,
  favorites:[],// offers.filter((offer)=>offer.isFavorite),
  activeCity:DEFAULT_CITY,
  authorizationStatus:AuthorizationStatus.Unknown,
  error:null,
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


    .addCase(fetchOfferAction.pending,(state) =>{
      state.offerFetchingstatus = RequestStatus.Pending;
    })
    .addCase(fetchOfferAction.fulfilled,(state, action) =>{
      state.offerFetchingstatus = RequestStatus.Success;
      state.offer = action.payload;
    })
    .addCase(fetchOfferAction.rejected,(state) =>{
      state.offerFetchingstatus = RequestStatus.Error;
    })


    .addCase(fetchNearbyPlaces.pending,(state)=>{
      state.nearbyFetchingstatus = RequestStatus.Pending;
    })
    .addCase(fetchNearbyPlaces.fulfilled,(state,action)=>{
      state.nearbyFetchingstatus = RequestStatus.Success;
      state.nearPlaces = action.payload;
    })
    .addCase(fetchNearbyPlaces.rejected,(state)=>{
      state.nearbyFetchingstatus = RequestStatus.Error;
    })


    .addCase(fetchCommentsAction.pending, (state)=>{
      state.comentFetchingstatus = RequestStatus.Pending;
    })
    .addCase(fetchCommentsAction.fulfilled, (state, action)=>{
      state.comentFetchingstatus = RequestStatus.Success;
      state.reviews = action.payload;
    })
    .addCase(fetchCommentsAction.rejected, (state)=>{
      state.comentFetchingstatus = RequestStatus.Error;
    })


    .addCase(fetchAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })


    .addCase(setError,(state,action) =>{
      state.error = action.payload;
    }
    )
    .addCase(setOffers,(state, action) =>{
      state.offers = action.payload;
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
    });

});

export { reducer };
