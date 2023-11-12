// import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
// import { TypeOfferMock } from '../../types/types-mock.ts';
import OffersList from '../../components/offers-list.tsx';
import MainMap from '../../components/main-map.tsx';
import { CityName } from '../../const.ts';
// import { useNavigate } from 'react-router-dom';
import { fetchOffer, fetchOffers, setActivCity } from '../../store/action.ts';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks.ts';

// type PagesMainProps = {
//   offers: TypeOfferMock[];
// }

function PagesMainContainer(): JSX.Element {
  // const [selectedPoint, setSelectedPoint] = useState<TypeOfferMock>();
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector((state) => state.activeCity);
  const offersNew = useAppSelector((state) => state.offers);
  const selectedPoint = useAppSelector((state) => state.offer);
  // const navigate = useNavigate();

  // const handleListItemHover = (offerId: number) => {
  // const currentPoint = offers.find((elem) =>
  //   elem.id === offerId,
  // );
  // setSelectedPoint(currentPoint);
  // };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <Helmet>
              <title>Главная страница</title>
            </Helmet>
            <ul className="locations__list tabs__list">
              {Object.values(CityName).map((elem) => (
                <li key={elem} className="locations__item">
                  <a className={`locations__item-link tabs__item ${elem === activeCity ? 'tabs__item--active' : ''}`}
                    onClick={
                      ()=>{
                        dispatch(setActivCity(elem));
                        dispatch(fetchOffers(elem));
                      //navigate(AppRoute.Main);
                      }
                    }
                  >
                    <span>{elem}</span>
                  </a>
                </li>
              ))}

            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}
                    onClick={
                      ()=>{

                      }
                    }
                  >Popular
                  </li>
                  <li className="places__option" tabIndex={0}
                    onClick={
                      ()=>{

                      }
                    }
                  >Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}
                    onClick={
                      ()=>{

                      }
                    }
                  >Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}
                    onClick={
                      ()=>{

                      }
                    }
                  >Top rated first
                  </li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={offersNew} onListItemHover={(offerId: number)=> dispatch(fetchOffer(offerId))}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <MainMap offers={offersNew} selectedPoint={selectedPoint}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default PagesMainContainer;