import { Route, BrowserRouter, Routes, } from 'react-router-dom';
import { AppRoute,} from '../../const.ts';
import { HelmetProvider } from 'react-helmet-async';
import PagesMainContainer from '../../pages/pages-main-container/pages-main-container.tsx';
import PagesNotFoundContainer from '../../pages/pages-not-found-container/pages-not-found-container.tsx';
import PagesFavoritesContainer from '../../pages/pages-favorites-container/pages-favorites-container.tsx';
import PagesLoginContainer from '../../pages/pages-login-container/pages-login-container.tsx';
import PagesOfferContainer from '../../pages/pages-offer-container/pages-offer-container.tsx';
import PrivateRoute from '../route/private-route.tsx';
import PublicRoute from '../route/public-route.tsx';


export default function App():JSX.Element{


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
              <PrivateRoute>
                <PagesFavoritesContainer/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={
              <PublicRoute>
                <PagesLoginContainer />
              </PublicRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<PagesOfferContainer />}
          />
          <Route
            path={AppRoute.NotFound}
            element={<PagesNotFoundContainer />}
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
