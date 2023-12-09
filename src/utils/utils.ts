
import { TypeOffer } from '../types/types-data';

type UtilsType = {
  sityName: string;
  offers:TypeOffer[];
  };

const filterCity = ({offers,sityName}:UtilsType) =>{
  offers.filter((offer)=> offer.city.name === sityName);
};

function sortByRating(a:TypeOffer, b:TypeOffer){
  return b.rating - a.rating;
}
function sortLowToHigh(a:TypeOffer, b:TypeOffer){
  return a.price - b.price;
}

function sortHighToLow(a:TypeOffer, b:TypeOffer){
  return b.price - a.price;
}


export {filterCity, sortByRating, sortLowToHigh, sortHighToLow};
