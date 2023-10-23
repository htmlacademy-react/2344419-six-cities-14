import { TypesOffersMock } from '../types/types-mock';
import PagesCard from './card';

type OffersListProps = {
  offers: TypesOffersMock[];
}


function OffersList({ offers }: OffersListProps): JSX.Element {

  return (<>
    {offers.map((offer) => <PagesCard key={offer.id} offer={offer}/>)}
          </>);
}


export default OffersList;
