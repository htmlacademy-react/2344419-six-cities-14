import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, CityName, NameSpace } from '../const';
import { TypeOffer } from '../types/types-data';


export const fetchOffer = createAction<TypeOffer['id']>(`${NameSpace.Offer}/fetch`);

export const fetchOffers = createAction<TypeOffer[]>(`${NameSpace.Offers}/fetch`);//

export const setOffers = createAction<TypeOffer[]>(`${NameSpace.Offers}/set`);

export const fetchNearPlaces = createAction<TypeOffer['id']>(`${NameSpace.NearPlaces}/fetch`);

export const fetchReviews = createAction<TypeOffer['id']>(`${NameSpace.Reviews}/fetch`);

export const dropOffer = createAction(`${NameSpace.Offer}/dropOffer`);

export const setActiveCity = createAction<CityName>(`${NameSpace.City}/setActivCity`);

export const fetchFavorites = createAction(`${NameSpace.Favorites}/fetch`);

export const setFavorites = createAction(`${NameSpace.Favorites}/set`);

export const fetchAuthorization = createAction<AuthorizationStatus>('user/fetchAuthorization');

export const setError = createAction<string|null>('/error');
