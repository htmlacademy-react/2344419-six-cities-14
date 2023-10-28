import { TypeOfferMock } from '../types/types-mock';
import PagesCard from './card';

type OffersListProps = {
  offers: TypeOfferMock[];
}


function OffersList({ offers }: OffersListProps): JSX.Element {

  return (
    <>
      {offers.map((offer) => <PagesCard key={offer.id} offer={offer}/>)}
    </>);
}


export default OffersList;
