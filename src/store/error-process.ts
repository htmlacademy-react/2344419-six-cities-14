import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { setError } from './api-actions';


type ErrorProcess = {
  error:string | null;
}

const initialState:ErrorProcess = {
  error: null,
};

export const errorProcess = createSlice({
  name:NameSpace.NearPlaces,
  initialState,
  reducers:{},
  extraReducers(builder){
    builder
      .addCase(setError,(state,action) =>{
        state.error = action.payload;
      });
  }
});
