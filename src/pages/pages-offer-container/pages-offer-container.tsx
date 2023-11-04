import { Helmet } from 'react-helmet-async';
import { TypeOfferMock, TypeReviewMock } from '../../types/types-mock';
import OfferCard from '../../components/offer-card';
import { useParams } from 'react-router-dom';
import OfferMap from '../../components/offer-map.tsx';
import { useState } from 'react';
import OffersReviewsList from '../../components/offer-reviews-list.tsx';

type OffersProps = {
  offers: TypeOfferMock[];
  reviews: TypeReviewMock[];
}


function PagesOfferContainer({offers, reviews}:OffersProps):JSX.Element{
  const { id } = useParams();
  const offer = offers.find((e)=> e.id === Number(id));
  const offerReviews = reviews.filter((e)=> e.id === Number(id));

  const [selectedPoint, setSelectedPoint] = useState<TypeOfferMock>();

  const handleListItemHover = (offerId: number) => {
    const currentPoint = offers.find((elem) =>
      elem.id === offerId,
    );
    setSelectedPoint(currentPoint);
  };

  return (
    <>
      <section className="offer">
        <Helmet>
          <title>
           Отзывы и рейтинг
          </title>
        </Helmet>

        { offer ?
          <OfferCard offer={offer} reviews={offerReviews}/>
          : <div></div>}
        <section className="offer__map map">
          <OfferMap offers={offers} selectedPoint={selectedPoint}/>
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <OffersReviewsList offers={offers} onListItemHover={handleListItemHover} />
          </div>
        </section>
      </div>
    </>
  );
}

export default PagesOfferContainer;
