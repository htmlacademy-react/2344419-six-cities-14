import { TypeOfferMock } from '../types/types-mock';
import PagesCard from './card';

type OffersListProps = {
  offers: TypeOfferMock[];
  onListItemHover: (offer_id: number) => void;
}


function OffersReviewsList({ offers,onListItemHover}: OffersListProps): JSX.Element {

  return (
    <>
      {offers.slice(0,3).map((offer) =>
        (<PagesCard key={offer.id} offer={offer} onListItemHover={onListItemHover}/>))}
    </>);
}


export default OffersReviewsList;
