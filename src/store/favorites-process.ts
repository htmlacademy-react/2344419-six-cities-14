import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../const';
import { fetchFavoritesAction, postFavorites } from './api-actions';

import { TypeOffer } from '../types/types-data';

type FavoritesProcess = {
  favorites:TypeOffer[];
  favoritesFetchingstatus:RequestStatus;
  offer:TypeOffer | undefined;
  offers:TypeOffer[];
}

const initialState:FavoritesProcess = {
  favorites:[],
  favoritesFetchingstatus:RequestStatus.Idle,
  offer:undefined,
  offers:[],
};

export const favoritesProcess = createSlice({
  name:NameSpace.Favorites,
  initialState,
  reducers:{},
  extraReducers(builder){
    builder
      .addCase(fetchFavoritesAction.fulfilled, (state, {payload})=>{
        state.favorites = payload;
      })
      .addCase(postFavorites.fulfilled, (state, {payload})=>{
        if(payload.isFavorite){
          state.favorites.push(payload);
        } else {
          state.favorites = state.favorites.filter((fav)=> fav.id !== payload.id);
        }
      });
  }
});
