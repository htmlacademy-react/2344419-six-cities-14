import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, CityName, DEFAULT_CITY, NameSpace, RequestStatus } from '../const';
import { fetchOffersAction, setOffers, } from './api-actions';
import { TypeOffer, TypeReview } from '../types/types-data';


type OffersProcess = {
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

const initialState:OffersProcess = {
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

export const offersProcess = createSlice({
  name:NameSpace.Offers,
  initialState,
  reducers:{},
  extraReducers(builder){
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
      .addCase(setOffers,(state, action) =>{
        state.offers = action.payload;
      });


  }
});
