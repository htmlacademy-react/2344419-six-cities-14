import PagesMainContainer from '../../pages/pages-main-container/pages-main-container.tsx';

type AppProps = {
  placeCartPrice: number;
  countRentalOffers: number;
}

export default function App({placeCartPrice,countRentalOffers}:AppProps):JSX.Element{
  return(
    <PagesMainContainer placeCartPrice = {placeCartPrice} countRentalOffers = {countRentalOffers}/>
  );
}
