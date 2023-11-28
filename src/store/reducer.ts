import {createReducer} from '@reduxjs/toolkit';
import { TypeOffer, TypeReview } from '../types/types-data';
import { fetchAuthorization, fetchFavorites, fetchOffer, setActiveCity, setError, setOffers, } from './action';
import { CityName, AuthorizationStatus, RequestStatus } from '../const';
import { fetchCommentsAction, fetchFavoritesAction, fetchNearbyPlaces, fetchOfferAction, fetchOffersAction, loginAction, postComment, postFavorites, } from './api-actions';


export const DEFAULT_CITY = CityName.Paris;

type InstialState = {
  offers: TypeOffer[];
  offersFetchingstatus:RequestStatus;
  nearPlaces: TypeOffer[];
  nearbyFetchingstatus: RequestStatus;
  reviews: TypeReview[];
  commentFetchingstatus:RequestStatus;
  offer: TypeOffer | undefined;
  offerId: string | undefined;
  offerFetchingstatus:RequestStatus;
  favorites: TypeOffer[];
  favoritesFetchingstatus:RequestStatus;
  activeCity: CityName;
  authorizationStatus:AuthorizationStatus;
  error:string | null;
  user:string | null;
  loginSendingStatus:RequestStatus;
};

const instialState:InstialState = {
  offers:[],
  offersFetchingstatus:RequestStatus.Idle,
  nearPlaces:[],
  nearbyFetchingstatus: RequestStatus.Idle,
  reviews:[],
  commentFetchingstatus:RequestStatus.Idle,
  offer:undefined,
  offerId: undefined,
  offerFetchingstatus:RequestStatus.Idle,
  favorites:[],
  favoritesFetchingstatus:RequestStatus.Idle,
  activeCity:DEFAULT_CITY,
  authorizationStatus:AuthorizationStatus.Unknown,
  error:null,
  user:null,
  loginSendingStatus:RequestStatus.Idle,
};

const reducer = createReducer(instialState,(builder) =>{
  builder
    .addCase(fetchOffer,(state, action) =>{
      state.offerId = action.payload;
    })
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
    .addCase(fetchNearbyPlaces.fulfilled,(state,action)=>{
      state.nearPlaces = action.payload;
    })
    .addCase(fetchCommentsAction.pending, (state)=>{
      state.commentFetchingstatus = RequestStatus.Pending;
    })
    .addCase(fetchCommentsAction.fulfilled, (state, action)=>{
      state.commentFetchingstatus = RequestStatus.Success;
      state.reviews = action.payload;
    })
    .addCase(fetchCommentsAction.rejected, (state)=>{
      state.commentFetchingstatus = RequestStatus.Error;
    })
    .addCase(fetchAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setActiveCity,(state, action)=>{
      state.activeCity = action.payload;
    })
    .addCase(fetchFavorites, (state)=>{
      state.favorites = state.offers.filter((offer)=>offer.isFavorite);
    })
    .addCase(fetchFavoritesAction.fulfilled, (state, {payload})=>{
      state.favorites = payload;
    })
    .addCase(postFavorites.fulfilled, (state, {payload})=>{
      if(payload.isFavorite){
        state.favorites.push(payload);
      } else {
        state.favorites = state.favorites.filter((fav)=> fav.id !== payload.id);
      }
    })
    .addCase(setError,(state,action) =>{
      state.error = action.payload;
    })
    .addCase(loginAction.fulfilled,(state,action) =>{
      if(action.payload.token){
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload.email;
      }
    })
    .addCase(loginAction.rejected,(state) =>{
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(setOffers,(state, action) =>{
      state.offers = action.payload;
    })
    .addCase(postComment.pending, (state)=>{
      state.commentFetchingstatus = RequestStatus.Pending;
    })
    .addCase(postComment.fulfilled, (state, action)=>{
      state.commentFetchingstatus = RequestStatus.Success;
      state.reviews.push(action.payload);
    })
    .addCase(postComment.rejected, (state)=>{
      state.commentFetchingstatus = RequestStatus.Error;
    });


});

export { reducer };
