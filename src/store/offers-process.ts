import { createSlice } from '@reduxjs/toolkit';
import { CityName, DEFAULT_CITY, DEFAULT_SORTING, NameSpace, RequestStatus } from '../const';
import { fetchOffersAction, postFavorites, setOffers, } from './api-actions';
import { TypeOffer, TypeReview } from '../types/types-data';


type OffersProcess = {
  offers: TypeOffer[];
  offersFetchingstatus:RequestStatus;
  nearPlaces: TypeOffer[];
  nearbyFetchingstatus: RequestStatus;
  reviews: TypeReview[];
  commentFetchingstatus:RequestStatus;
  favorites: TypeOffer[];
  favoritesFetchingstatus:RequestStatus;
  activeCity: CityName;
  error:string | null;
  user:string | null;
  loginSendingStatus:RequestStatus;
  sortingOption: string;
}

const initialState:OffersProcess = {
  offers:[],
  offersFetchingstatus:RequestStatus.Idle,
  nearPlaces:[],
  nearbyFetchingstatus: RequestStatus.Idle,
  reviews:[],
  commentFetchingstatus:RequestStatus.Idle,
  favorites:[],
  favoritesFetchingstatus:RequestStatus.Idle,
  activeCity:DEFAULT_CITY,
  error:null,
  user:null,
  loginSendingStatus:RequestStatus.Idle,
  sortingOption: DEFAULT_SORTING,

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
      })
      .addCase(postFavorites.fulfilled,(state, action)=>{
        const founded = state.offers.find((offer) =>offer.id === action.payload.id);
        if(founded){
          founded.isFavorite = action.payload.isFavorite;
        }
      });
  }
});