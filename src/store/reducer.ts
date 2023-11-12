import {createReducer} from '@reduxjs/toolkit';
import { offersMock } from '../mock/offers';
import { reviewsMock } from '../mock/reviews';
import { TypeOfferMock, TypeReviewMock } from '../types/types-mock';
import { dropOffer, fetchFavorites, fetchNearPlaces, fetchOffer, fetchOffers, fetchReviews, setActivCity } from './action';
import { CityName } from '../const';


export const DEFAULT_CITY = CityName.Paris;

type InstialState = {
  offers: TypeOfferMock[];
  nearPlaces: TypeOfferMock[];
  reviews: TypeReviewMock[];
  offer: TypeOfferMock | undefined;
  favorites: TypeOfferMock[];
  activeCity: CityName;
};

const instialState:InstialState = {
  offers:offersMock.filter((offer)=> offer.city.name === DEFAULT_CITY as string),
  nearPlaces:[],
  reviews:[],
  offer:undefined,
  favorites:[],
  activeCity:DEFAULT_CITY,
};

const reducer = createReducer(instialState,(builder) =>{
  builder
    .addCase(fetchOffers,(state, action) =>{
      state.offers = offersMock.filter((offer)=> offer.city.name === action.payload) ?? [];
    })
    .addCase(fetchOffer,(state, action) =>{
      state.offer = offersMock.find((offer)=> offer.id === action.payload) ?? undefined;
    })
    .addCase(fetchNearPlaces,(state,action)=>{//объявления поблизости
      state.nearPlaces = offersMock.filter((offer)=>offer.id === action.payload);
    })
    .addCase(fetchReviews, (state)=>{
      state.reviews = reviewsMock;
    })
    .addCase(dropOffer, (state)=>{//удаление
      state.offer = offersMock[0];
      state.nearPlaces = [];
    })
    .addCase(setActivCity,(state, action)=>{
      state.activeCity = action.payload;
    })
    .addCase(fetchFavorites, (state)=>{
      state.favorites = state.offers.filter((offer)=>offer.isFavorite);
    });
});

export { reducer };
