import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const.ts';
import PagesMainContainer from '../../pages/pages-main-container/pages-main-container.tsx';
import PagesNotFoundContainer from '../../pages/pages-not-found-container/pages-not-found-container.tsx';
import PagesFavoritesContainer from '../../pages/pages-favorites-container/pages-favorites-container.tsx';
import PagesLoginContainer from '../../pages/pages-login-container.tsx/pages-login-container.tsx';
import PagesOfferContainer from '../../pages/pages-offer-container/pages-offer-container.tsx';

type AppProps = {
  placeCartPrice: number;
  countRentalOffers: number;
}

export default function App({placeCartPrice,countRentalOffers}:AppProps):JSX.Element{
  return(
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<PagesMainContainer placeCartPrice = {placeCartPrice} countRentalOffers = {countRentalOffers}/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={<PagesFavoritesContainer />}
        />
        <Route
          path={AppRoute.Login}
          element={<PagesLoginContainer />}
        />
        <Route
          path={AppRoute.Offer}
          element={<PagesOfferContainer />}
        />
        <Route
          path='*'
          element={<PagesNotFoundContainer />}
        />
      </Routes>
    </BrowserRouter>

  );
}
