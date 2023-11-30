import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../const';
import { fetchAuthorization, loginAction } from './api-actions';

type UserProcess = {
  authorizationStatus:AuthorizationStatus;
  user:string | null;
}

const initialState:UserProcess = {
  authorizationStatus:AuthorizationStatus.Unknown,
  user:null,
};

export const userProcess = createSlice({
  name:NameSpace.User,
  initialState,
  reducers:{},
  extraReducers(builder){
    builder
      .addCase(loginAction.fulfilled,(state,action) =>{
        if(action.payload.token){
          state.authorizationStatus = AuthorizationStatus.Auth;
          state.user = action.payload.email;
        }
      })
      .addCase(loginAction.rejected,(state) =>{
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(fetchAuthorization, (state, action) => {
        state.authorizationStatus = action.payload;
      });
  }
});
