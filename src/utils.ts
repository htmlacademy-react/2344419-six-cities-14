import { TypeOfferMock } from './types/types-mock';

type UtilsType = {
  sityName: string;
  offers:TypeOfferMock[];
  };

const filterCity = ({offers,sityName}:UtilsType) =>{
  offers.filter((offer)=> offer.city.name === sityName);
};

export {filterCity};
