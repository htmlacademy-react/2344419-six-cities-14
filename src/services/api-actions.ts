import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { TypeOffer, TypeReview } from '../types/types-data';
import { APIRoute, NameSpace } from '../const';
import { dropToken, saveToken } from './token';
import { AuthData, UserData } from '../types/data';

export const fetchOffersAction = createAsyncThunk<TypeOffer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>
(
  `${NameSpace.Offers}/fetchOffers`,
  async(_,{ extra:api })=>{
    const {data} = await api.get<TypeOffer[]>(APIRoute.Offers);
    return data;
  }
);

export const fetchOfferAction = createAsyncThunk<TypeOffer, string, {
  state: State;
  extra: AxiosInstance;
}>
(
  `${NameSpace.Offer}/fetchOffer`,
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
  `${NameSpace.Reviews}/fetchComments`,
  async(offerId,{ extra:api })=>{
    const { data } = await api.get<TypeReview[]>(`${APIRoute.Comments}/${offerId}`);
    return data;
  }
);

export const postComment = createAsyncThunk<TypeReview, {reviewData :TypeReview; offerId: TypeOffer['id']}, {
  state: State;
  extra: AxiosInstance;
}>
(
  `${NameSpace.Reviews}/postComment`,
  async({reviewData, offerId},{ extra:api })=>{
    const { data } = await api.post<TypeReview>(`${APIRoute.Comments}/${offerId}`, reviewData);
    return data;
  }
);


export const fetchNearbyPlaces = createAsyncThunk<TypeOffer[], TypeOffer['id'], {
  state: State;
  extra: AxiosInstance;
}>
(
  `${NameSpace.NearPlaces }/fetchNearby`,
  async(offerId,{ extra:api })=>{
    const { data } = await api.get<TypeOffer[]>(`${APIRoute.Offers}/${offerId}${APIRoute.Nearby}`);
    return data;
  }
);

export const fetchFavoritasAction = createAsyncThunk<TypeOffer[], TypeOffer['id'], {
  state: State;
  extra: AxiosInstance;
}>
(
  `${NameSpace.Favorites}/fetchFavoritas`,
  async(_arg,{ extra:api })=>{
    const { data } = await api.get<TypeOffer[]>(APIRoute.Favorites);
    return data;
  }
);

export const checkOutAction = createAsyncThunk<UserData, undefined, {
  state:State;
  extra: AxiosInstance;
}>
(
  `${NameSpace.User}/checkAuth`,
  async(_arg, { extra:api })=>{
    const { data } = await api.get<UserData>(APIRoute.Login);
    return data;
  }
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  state:State;
  extra: AxiosInstance;
}>
(
  `${NameSpace.User}/login`,
  async(loginData, {extra:api})=>{
    const {data} = await api.post<UserData>(APIRoute.Login,loginData);
    saveToken(data.token);
    return data;
  }
);

export const logoutAction = createAsyncThunk<void,undefined,{
  state:State;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/logout`,
  async (_arg,{extra:api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
