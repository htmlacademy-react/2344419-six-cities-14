import { createSlice } from '@reduxjs/toolkit';
import { CityName, DEFAULT_CITY, NameSpace, RequestStatus } from '../const';
import { fetchOffer, fetchOfferAction, } from './api-actions';
import { TypeOffer, TypeReview } from '../types/types-data';


type OfferProcess = {
  nearPlaces: TypeOffer[];
  nearbyFetchingstatus: RequestStatus;
  reviews: TypeReview[];
  commentFetchingstatus:RequestStatus;
  offer: TypeOffer | undefined;
  offerId: string | undefined;
  offerFetchingstatus:RequestStatus;
  favoritesFetchingstatus:RequestStatus;
  activeCity: CityName;
  error:string | null;
  user:string | null;
  loginSendingStatus:RequestStatus;
}

const initialState:OfferProcess = {
  nearPlaces:[],
  nearbyFetchingstatus: RequestStatus.Idle,
  reviews:[],
  commentFetchingstatus:RequestStatus.Idle,
  offer:undefined,
  offerId: undefined,
  offerFetchingstatus:RequestStatus.Idle,
  favoritesFetchingstatus:RequestStatus.Idle,
  activeCity:DEFAULT_CITY,
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
