import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

export const Setting = {
  PlaceCartPrice : 124,
  CountRentalOffers: 6,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      placeCartPrice = {Setting.PlaceCartPrice}
      countRentalOffers = {Setting.CountRentalOffers}
    />
  </React.StrictMode>
);
