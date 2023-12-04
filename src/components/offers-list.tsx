import { TypeOffer } from '../types/types-data';
import PagesCard from './card';
import { memo } from 'react';


type OffersListProps = {
  offers: TypeOffer[];
  onListItemHover: (offer_id:string) => void;
}


function OffersList({ offers,onListItemHover}: OffersListProps): JSX.Element {

  return (
    offers.length === 0 ?
      <h3> «No places to stay available»
      </h3> :
      <>
        {offers.map((offer) =>
          (<PagesCard key={offer.id} offer={offer} onListItemHover={onListItemHover}/>))}
      </>);
}


export default memo(OffersList);
