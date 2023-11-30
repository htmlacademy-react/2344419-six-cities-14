import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, CityName, DEFAULT_CITY, NameSpace, RequestStatus } from '../const';
import { fetchOffer, fetchOfferAction, } from './api-actions';
import { TypeOffer, TypeReview } from '../types/types-data';


type OfferProcess = {

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
}

const initialState:OfferProcess = {
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

export const offerProcess = createSlice({
  name:NameSpace.Offer,
  initialState,
  reducers:{},
  extraReducers(builder){
    builder
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
      .addCase(fetchOffer,(state, action) =>{
        state.offerId = action.payload;
      });
  }
});
