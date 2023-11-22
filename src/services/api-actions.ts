import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { TypeOffer, TypeReview } from '../types/types-data';
import { APIRoute, AuthorizationStatus } from '../const';
import { fetchAuthorization } from '../store/action';
import { dropToken, saveToken } from './token';
import { AuthData, UserData } from '../types/data';

export const fetchOffersAction = createAsyncThunk<TypeOffer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>
(
  'data/fetchOffers',
  async(_,{ extra:api })=>{
    const {data} = await api.get<TypeOffer[]>(APIRoute.Offers);
    // dispatch(fetchOffers(data));
    return data;
  }
);

export const fetchOfferAction = createAsyncThunk<TypeOffer, string, {
  state: State;
  extra: AxiosInstance;
}>
(
  'data/fetchOffer',
  async(offerId,{ extra:api })=>{
    const {data} = await api.get<TypeOffer>(`${APIRoute.Offers}/${offerId}`);
    return data;
  }
);

export const fetchCommentsAction = createAsyncThunk<TypeReview[], TypeOffer['id'], {
  state: State;
  extra: AxiosInstance;
}>
(
  'data/fetchComments',
  async(offerId,{ extra:api })=>{
    const { data } = await api.get<TypeReview[]>(`${APIRoute.Comments}/${offerId}`);
    return data;
  }
);
export const fetchNearbyPlaces = createAsyncThunk<TypeOffer[], TypeOffer['id'], {
  state: State;
  extra: AxiosInstance;
}>
(
  'data/fetchNearby',
  async(offerId,{ extra:api })=>{
    const { data } = await api.get<TypeOffer[]>(`${APIRoute.Offers}/${offerId}${APIRoute.Nearby}`);
    return data;
  }
);

export const checkOutAction = createAsyncThunk<void, undefined, {
  dispatch:AppDispatch;
  state:State;
  extra: AxiosInstance;
}>
(
  'user/checkOut',
  async(_arg,{dispatch, extra:api})=>{
    try{
      await api.get(APIRoute.Login);
      dispatch(fetchAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(fetchAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk <void, AuthData, {
  dispatch:AppDispatch;
  state:State;
  extra: AxiosInstance;
}>
(
  'user/login',
  async({login:email,password},{dispatch,extra:api})=>{
    const{data:{token}} = await api.post<UserData>(APIRoute.Login,{email,password});
    saveToken(token);
    dispatch(fetchAuthorization(AuthorizationStatus.Auth));
  }
);

export const logoutAction = createAsyncThunk<void,undefined,{
  dispatch:AppDispatch;
  state:State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg,{dispatch,extra:api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(fetchAuthorization(AuthorizationStatus.NoAuth));
  },
);
