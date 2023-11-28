import { Helmet } from 'react-helmet-async';
import OffersList from '../../components/offers-list.tsx';
import MainMap from '../../components/main-map.tsx';
import { AuthorizationStatus, CityName, RequestStatus } from '../../const.ts';
import { fetchOffer, setActiveCity, setOffers } from '../../store/action.ts';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks.ts';
import { SortingTypePoint} from '../../sorting.tsx';
import { TypeSorting } from '../../types/sorting.ts';
import { TypeOffer } from '../../types/types-data.ts';
import { sortByRating, sortHighToLow, sortLowToHigh } from '../../utils.ts';
import { fetchFavoritesAction, fetchOffersAction } from '../../store/api-actions.ts';
import { useLayoutEffect, useMemo } from 'react';
import { LoadingSpiner } from '../../components/loading-spiner.tsx';
import PagesNotFoundContainer from '../pages-not-found-container/pages-not-found-container.tsx';
import { Link } from 'react-router-dom';

const sortingPoint:Record<TypeSorting, (offers: TypeOffer[]) => TypeOffer[]> = {
  Popular: (offers:TypeOffer[]) => offers.slice(),
  HighToLow: (offers:TypeOffer[]) => offers.toSorted(sortHighToLow),
  LowToHigh: (offers:TypeOffer[]) => offers.toSorted(sortLowToHigh),
  TopRated: (offers:TypeOffer[]) => offers.toSorted(sortByRating),
};

function PagesMainContainer(): JSX.Element {
  const dispatch = useAppDispatch();
  const myState = useAppSelector((state) => state);

  const {activeCity, offers, offerId, favorites, authorizationStatus, offersFetchingstatus, user} = myState;

  useLayoutEffect(()=>{
    dispatch(fetchOffersAction());
    dispatch(fetchFavoritesAction());
  },[dispatch]);

  const newOffers = useMemo(() => offers?.filter((item)=> item.city.name === activeCity as string), [activeCity, offers]);

  const onChange = (type:TypeSorting) =>{
    dispatch(setOffers(sortingPoint[type](newOffers)));
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active" >
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">


              {authorizationStatus === AuthorizationStatus.Auth ? (
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to="favorites">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">{user}</span>
                      <span className="header__favorite-count">{favorites.length}</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="login">
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </ul>
              ) : (
                <ul className="header__nav-list">
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="login" >
                      <span className="header__signout">Sign in</span>
                    </a>
                  </li>
                </ul>
              )}

            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <Helmet>
              <title>Главная страница</title>
            </Helmet>


            <ul className="locations__list tabs__list">
              {Object.values(CityName).map((elem) => (
                <li key={elem} className="locations__item">
                  <a className={`locations__item-link tabs__item ${elem === activeCity ? 'tabs__item--active' : ''}`}
                    onClick={
                      ()=>{
                        dispatch(setActiveCity(elem));
                      }
                    }
                  >
                    <span>{elem}</span>
                  </a>
                </li>
              ))}

            </ul>
          </section>
        </div>

        {offersFetchingstatus === RequestStatus.Error && <PagesNotFoundContainer />}
        {offersFetchingstatus === RequestStatus.Pending && <LoadingSpiner/>}
        {offersFetchingstatus === RequestStatus.Success && (
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{newOffers?.length} places to stay in {activeCity}</b>
                <SortingTypePoint onChange={onChange}/>

                <div className="cities__places-list places__list tabs__content">
                  <OffersList offers={newOffers} onListItemHover={(id)=> dispatch(fetchOffer(id))}/>
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <MainMap offers={newOffers} selectedPoint={offerId} />
                </section>
              </div>
            </div>
          </div>)}
      </main>
    </div>
  );
}
export default PagesMainContainer;
