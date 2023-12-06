import { Helmet } from 'react-helmet-async';
import OfferCard from '../../components/offer-card';
import { useParams } from 'react-router-dom';
import OffersReviewsList from '../../components/offer-reviews-list.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks.ts';
import { MAX_CUNT_NEAR_PLACES, RequestStatus } from '../../const.ts';
import { useEffect } from 'react';
import MainMap from '../../components/main-map.tsx';
import { dropOffer, fetchCommentsAction, fetchNearbyPlaces, fetchOfferAction } from '../../store/api-actions.ts';
import PagesNotFoundContainer from '../pages-not-found-container/pages-not-found-container.tsx';
import { LoadingSpiner } from '../../components/loading-spiner.tsx';
import { getNearPlaces, getOffer, getOfferFetchingstatus, getReviews } from '../../store/selectors.ts';
import Header from '../../components/header.tsx';

function PagesOfferContainer():JSX.Element{
  const dispatch = useAppDispatch();

  const offer = useAppSelector(getOffer);
  const reviews = useAppSelector(getReviews);
  const nearPlaces = useAppSelector(getNearPlaces);
  const fetchingStatus = useAppSelector(getOfferFetchingstatus);
  const nearPlacesPoint = nearPlaces.slice(0,MAX_CUNT_NEAR_PLACES);


  const { id } = useParams();

  useEffect(() => {
    if(id){
      dispatch(fetchOfferAction(id));
      dispatch(fetchCommentsAction(id));
      dispatch(fetchNearbyPlaces(id));
    }
    return()=>{
      dispatch(dropOffer());
    };
  }, [id,dispatch]);

  return (
    <>
      <Header/>
      <main className="page__main page__main--offer">
        {fetchingStatus === RequestStatus.Error && <PagesNotFoundContainer/>}
        {fetchingStatus === RequestStatus.Pending && <LoadingSpiner/>}
        {fetchingStatus === RequestStatus.Success && (
          <div>
            <section className="offer">
              <Helmet>
                <title>
           Отзывы и рейтинг
                </title>
              </Helmet>
              { offer ?
                <OfferCard offer={offer} reviews={reviews}/>
                : <div></div>}
              <section className="offer__map map">
                <MainMap offers={[...nearPlacesPoint,offer!]} selectedPoint={id} fromOffer/>
              </section>
            </section>
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <div className="near-places__list places__list">
                  <OffersReviewsList offers={nearPlacesPoint} />
                </div>
              </section>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default PagesOfferContainer;
