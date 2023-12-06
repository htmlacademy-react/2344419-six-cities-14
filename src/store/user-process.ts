import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../const';
import { checkAuthAction, loginAction, logoutAction } from './api-actions';

type UserProcess = {
  authorizationStatus:AuthorizationStatus;
  user:string | null;
}

const initialState:UserProcess = {
  authorizationStatus:AuthorizationStatus.NoAuth,
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
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload.email;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
      });
  }
});
