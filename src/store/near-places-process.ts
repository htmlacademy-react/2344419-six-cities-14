import { createSlice } from '@reduxjs/toolkit';
import { TypeOffer } from '../types/types-data';
import { NameSpace } from '../const';
import { fetchNearbyPlaces } from './api-actions';


type NearPlacesProcess = {
  nearPlaces:TypeOffer[];
}

const initialState:NearPlacesProcess = {
  nearPlaces:[],
};

export const nearPlacesProcess = createSlice({
  name:NameSpace.NearPlaces,
  initialState,
  reducers:{},
  extraReducers(builder){
    builder
      .addCase(fetchNearbyPlaces.fulfilled,(state,action)=>{
        state.nearPlaces = action.payload;
      });
  }
});
