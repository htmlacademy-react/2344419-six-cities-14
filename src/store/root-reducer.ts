import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { offerProcess } from './offer-process';
import { offersProcess } from './offers-process';
import { userProcess } from './user-process';
import { favoritesProcess } from './favorites-process';
import { reviewsProcess } from './reviews-process';
import { cityProcess } from './city-process';
import { nearPlacesProcess } from './near-places-process';
import { errorProcess } from './error-process';

export const rootReducer = combineReducers({
  [NameSpace.Offer]: offerProcess.reducer,
  [NameSpace.Offers]: offersProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Favorites]: favoritesProcess.reducer,
  [NameSpace.Reviews]: reviewsProcess.reducer,
  [NameSpace.City]: cityProcess.reducer,
  [NameSpace.NearPlaces]: nearPlacesProcess.reducer,
  [NameSpace.Error]: errorProcess.reducer,
});
