import { TypeOffer } from '../types/types-mock';
import PagesCard from './card';

type OffersListProps = {
  offers: TypeOffer[];
  onListItemHover: (offer_id: number) => void;
}


function OffersList({ offers,onListItemHover}: OffersListProps): JSX.Element {

  return (
    <>
      {offers.map((offer) =>
        (<PagesCard key={offer.id} offer={offer} onListItemHover={onListItemHover}/>))}
    </>);
}


export default OffersList;
