import {createReducer} from '@reduxjs/toolkit';
import { offersMock } from '../mock/offers';
import { reviewsMock } from '../mock/reviews';
import { TypeOffer, TypeReviewMock } from '../types/types-mock';
import { dropOffer, fetchFavorites, fetchNearPlaces, fetchOffer, fetchOffers, fetchReviews, setActiveCity, setOffers } from './action';
import { CityName } from '../const';


export const DEFAULT_CITY = CityName.Paris;

type InstialState = {
  offers: TypeOffer[];
  nearPlaces: TypeOffer[];
  reviews: TypeReviewMock[];
  offer: TypeOffer | undefined;
  favorites: TypeOffer[];
  activeCity: CityName;
};

const instialState:InstialState = {
  offers:offersMock.filter((offer)=> offer.city.name === DEFAULT_CITY as string),
  nearPlaces:[],
  reviews:[],
  offer:undefined,
  favorites: offersMock.filter((offer)=>offer.isFavorite),
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
    .addCase(setOffers,(state, action) =>{
      state.offers = action.payload;
    })
    .addCase(fetchNearPlaces,(state,action)=>{
      state.nearPlaces = offersMock.filter((offer)=>offer.id === action.payload);
    })
    .addCase(fetchReviews, (state, action)=>{
      state.reviews = reviewsMock.filter((review)=>review.id === action.payload);
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
