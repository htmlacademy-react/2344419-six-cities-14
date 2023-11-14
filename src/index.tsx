import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { offersMock } from './mock/offers';
import { reviewsMock } from './mock/reviews';
import { store } from './store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={offersMock}
        reviews={reviewsMock}
      />
    </Provider>
  </React.StrictMode>
);
