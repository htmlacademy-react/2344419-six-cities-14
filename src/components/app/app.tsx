import PagesMainContainer from '../../pages/pages-main-container/pages-main-container.tsx';

type AppProps = {
  placeCartPrice: number;
}

export default function App({placeCartPrice}:AppProps):JSX.Element{
  return(
    <PagesMainContainer placeCartPrice = {placeCartPrice}/>
  );
}
