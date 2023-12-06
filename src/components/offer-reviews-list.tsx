import { TypeOffer } from '../types/types-data';
import PagesCard from './card';


type OffersListProps = {
  offers: TypeOffer[];
}


function OffersReviewsList({ offers}: OffersListProps): JSX.Element {

  return (
    <>
      {offers.slice(0,3).map((offer) =>
        (<PagesCard key={offer.id} offer={offer} />))}
    </>);
}


export default OffersReviewsList;
