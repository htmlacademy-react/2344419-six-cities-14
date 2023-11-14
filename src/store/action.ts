import { createAction } from '@reduxjs/toolkit';
import { CityName, NameSpace } from '../const';
import { TypeOfferMock } from '../types/types-mock';


export const fetchOffer = createAction<TypeOfferMock['id']>(`${NameSpace.Offer}/fetch`);

export const fetchOffers = createAction<string>(`${NameSpace.Offers}/fetch`);

export const fetchNearPlaces = createAction<TypeOfferMock['id']>(`${NameSpace.NearPlaces}/fetch`);

export const fetchReviews = createAction<TypeOfferMock['id']>(`${NameSpace.Reviews}/fetch`);

export const dropOffer = createAction(`${NameSpace.Offer}/dropOffer`);

export const setActivCity = createAction<CityName>(`${NameSpace.City}/setActivCity`);

// export const setSelectedPoint = createAction<TypeOfferMock>(`${NameSpace.Point}/setSelectedPoint`);

export const fetchFavorites = createAction(`${NameSpace.Favorites}/fetch`);
