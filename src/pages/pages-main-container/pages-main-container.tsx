import { Helmet } from 'react-helmet-async';
import OffersList from '../../components/offers-list.tsx';
import MainMap from '../../components/main-map.tsx';
import { CityName, RequestStatus } from '../../const.ts';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks.ts';
import { SortingTypePoint} from '../../sorting.tsx';
import { TypeSorting } from '../../types/sorting.ts';
import { TypeOffer } from '../../types/types-data.ts';
import { sortByRating, sortHighToLow, sortLowToHigh } from '../../utils.ts';
import { fetchFavoritesAction, fetchOffer, fetchOffersAction, setActiveCity, setOffers } from '../../store/api-actions.ts';
import { useCallback, useLayoutEffect, useMemo } from 'react';
import { LoadingSpiner } from '../../components/loading-spiner.tsx';
import PagesNotFoundContainer from '../pages-not-found-container/pages-not-found-container.tsx';

import { getActiveCyty, getOfferId, getOffers, getOffersFetchingstatus, getUser } from '../../store/selectors.ts';
import MainEmpty from '../../components/main-empty.tsx';
import Header from '../../components/header.tsx';


const sortingPoint:Record<TypeSorting, (offers: TypeOffer[]) => TypeOffer[]> = {
  Popular: (offers:TypeOffer[]) => offers.slice(),
  HighToLow: (offers:TypeOffer[]) => offers.toSorted(sortHighToLow),
  LowToHigh: (offers:TypeOffer[]) => offers.toSorted(sortLowToHigh),
  TopRated: (offers:TypeOffer[]) => offers.toSorted(sortByRating),
};

function PagesMainContainer(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector(getActiveCyty);
  const offers = useAppSelector(getOffers);
  const offersFetchingstatus = useAppSelector(getOffersFetchingstatus);
  const offerId = useAppSelector(getOfferId);
  const user = useAppSelector(getUser);


  useLayoutEffect(()=>{
    dispatch(fetchOffersAction());
    if(user){
      dispatch(fetchFavoritesAction());
    }
  },[dispatch, user]);

  const newOffers = useMemo(() => offers?.filter((item:TypeOffer)=> item.city.name === activeCity as string), [activeCity, offers]);

  const onChange = useCallback((type:TypeSorting) =>
    dispatch(setOffers(sortingPoint[type](newOffers))),[dispatch, newOffers]);

  const onListItemHover = useCallback((id: string)=> dispatch(fetchOffer(id)),[dispatch]);
  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className={`page__main page__main--index ${newOffers.length === 0 ? 'page__main--index-empty' : ''}`}>
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
                        dispatch(fetchOffersAction());
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

          newOffers.length === 0 ? <MainEmpty city={activeCity}/> :

            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{newOffers?.length === 1 ? ' 1 place' : `${newOffers?.length} places`}  to stay in {activeCity}</b>
                  <SortingTypePoint onChange={onChange}/>

                  <div className="cities__places-list places__list tabs__content">
                    <OffersList offers={newOffers} onListItemHover={onListItemHover}/>
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
