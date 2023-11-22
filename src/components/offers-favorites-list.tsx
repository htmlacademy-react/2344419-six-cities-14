import { TypeOffer } from '../types/types-data';
import FavoritesCard from './favorites-cards';


type FavoritesOffersListProps = {
  offers: TypeOffer[];
}


function OffersFavoritList({ offers }: FavoritesOffersListProps): JSX.Element {
  return (
    <>
      {offers.map((offer) => offer.isFavorite ? <FavoritesCard key={offer.id} offer={offer} /> : '')}
      {/* block='favorites' */}
    </>);
}


export default OffersFavoritList;
