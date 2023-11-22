import { Helmet } from 'react-helmet-async';
import OfferCard from '../../components/offer-card';
import { useParams } from 'react-router-dom';
import OffersReviewsList from '../../components/offer-reviews-list.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks.ts';
import { dropOffer } from '../../store/action.ts';
import { MAX_CUNT_NEAR_PLACES } from '../../const.ts';
import { useEffect } from 'react';
import MainMap from '../../components/main-map.tsx';
import { fetchCommentsAction, fetchNearbyPlaces, fetchOfferAction } from '../../services/api-actions.ts';

function PagesOfferContainer():JSX.Element{
  const dispatch = useAppDispatch();

  const myState = useAppSelector((state) => state);

  const {offer, offers, reviews, nearPlaces} = myState;

  // const nearPlacesToRender = nearPlaces.slice(0,MAX_CUNT_NEAR_PLACES);
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
          <MainMap offers={offers} selectedPoint={offer} fromOffer/>
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
    </>
  );
}

export default PagesOfferContainer;
