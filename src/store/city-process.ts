import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_CITY, NameSpace } from '../const';
import { setActiveCity } from './api-actions';


type CityProcess = {
activeCity: string;
}

const initialState:CityProcess = {
  activeCity:DEFAULT_CITY,
};

export const cityProcess = createSlice({
  name:NameSpace.City,
  initialState,
  reducers:{},
  extraReducers(builder){
    builder
      .addCase(setActiveCity,(state, action)=>{
        state.activeCity = action.payload;
      });
  }
});
