import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const.ts';
import { HelmetProvider } from 'react-helmet-async';
import PagesMainContainer from '../../pages/pages-main-container/pages-main-container.tsx';
import PagesNotFoundContainer from '../../pages/pages-not-found-container/pages-not-found-container.tsx';
import PagesFavoritesContainer from '../../pages/pages-favorites-container/pages-favorites-container.tsx';
import PagesLoginContainer from '../../pages/pages-login-container/pages-login-container.tsx';
import PagesOfferContainer from '../../pages/pages-offer-container/pages-offer-container.tsx';
import PrivateRoute from '../private-route.tsx';
import { TypeOfferMock, TypeReviewMock } from '../../types/types-mock.ts';


type AppProps = {
  offers: TypeOfferMock[];
  reviews: TypeReviewMock[];
}

export default function App({offers,reviews}:AppProps):JSX.Element{

  return(
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<PagesMainContainer />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <PagesFavoritesContainer offers={offers}/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={<PagesLoginContainer />}
          />
          <Route
            path={AppRoute.Offer}
            element={<PagesOfferContainer offers={offers} reviews={reviews} />}
          />
          <Route
            path='*'
            element={<PagesNotFoundContainer />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>

  );
}
