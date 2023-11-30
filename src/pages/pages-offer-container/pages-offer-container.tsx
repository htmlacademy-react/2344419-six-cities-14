import { Helmet } from 'react-helmet-async';
import OfferCard from '../../components/offer-card';
import { useParams } from 'react-router-dom';
import OffersReviewsList from '../../components/offer-reviews-list.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks.ts';
import { MAX_CUNT_NEAR_PLACES, RequestStatus } from '../../const.ts';
import { useEffect, useMemo } from 'react';
import MainMap from '../../components/main-map.tsx';
import { dropOffer, fetchCommentsAction, fetchNearbyPlaces, fetchOfferAction } from '../../store/api-actions.ts';
import PagesNotFoundContainer from '../pages-not-found-container/pages-not-found-container.tsx';
import { LoadingSpiner } from '../../components/loading-spiner.tsx';

function PagesOfferContainer():JSX.Element{
  const dispatch = useAppDispatch();
  const fetchingStatus = useAppSelector((state)=>state.OFFERS.offerFetchingstatus);

  const myState = useAppSelector((state) => state.OFFER);
  const {offer, offers, reviews, nearPlaces, activeCity} = myState;

  const filteredOffers = useMemo(() => offers?.filter((item)=> item.city.name === activeCity as string), [activeCity, offers]);


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
              <MainMap offers={filteredOffers} selectedPoint={id} fromOffer/>
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <OffersReviewsList offers={nearPlaces.slice(0,MAX_CUNT_NEAR_PLACES)} />
              </div>
            </section>
          </div>
        </div>

      )}
    </>
  );
}

export default PagesOfferContainer;
