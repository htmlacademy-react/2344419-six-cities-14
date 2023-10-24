import { TypeOfferMock } from '../types/types-mock';
import FavoritesCard from './favorites-cards';


type FavoritesOffersListProps = {
  offers: TypeOfferMock[];
}


function OffersFavoritList({ offers }: FavoritesOffersListProps): JSX.Element {
  return (<>
    {offers.map((offer) => offer.isFavorite ? <FavoritesCard key={offer.id} offer={offer}/> : '')}
          </>);
}


export default OffersFavoritList;
