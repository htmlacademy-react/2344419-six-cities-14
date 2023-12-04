import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { TypeOffer } from '../../types/types-data';
import PagesCard from '../../components/card';
import { getFavorites } from '../../store/selectors';
import { setActiveCity } from '../../store/api-actions';
import { CityName } from '../../const';
import { Link } from 'react-router-dom';
import Header from '../../components/header';

function getFavoriteByCity(favorites:TypeOffer[]){
  return favorites.reduce<{[key:string]:TypeOffer[]}>((acc,curr) => {
    const city = curr.city.name;
    if(!(city in acc)){
      acc[city] = [];
    }
    acc[city].push(curr);
    return acc;
  }, {});
}


function PagesFavoritesContainer():JSX.Element{

  const favorites = useAppSelector(getFavorites);
  const dispatch = useAppDispatch();


  const favoriteByCity = getFavoriteByCity(favorites);
  return(
    favorites ?
      <div className="page">
        <Header/>

        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <Helmet>
              <title>
              Избранное
              </title>
            </Helmet>
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
              </div>
            </section>
          </div>
          <footer className="footer container">
            <a className="footer__logo-link" href="main.html">
              <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
            </a>
          </footer>
        </main>
      </div>
      :
      <div className="page">
        <Header/>

        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <Helmet>
              <title>
              Избранное
              </title>
            </Helmet>
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Object.entries(favoriteByCity).map(
                  ([city, groupedFavorites])=>(
                    <li className="favorites__locations-items" key={city}>
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <Link className="locations__item-link" to="http://localhost:5173/"onClick={
                            ()=> dispatch(setActiveCity(city as CityName))
                          }
                          >
                            <span>{city}</span>
                          </Link>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {groupedFavorites.map((offer)=>(
                          <PagesCard
                            key={offer.id}
                            offer={offer}
                            fromFavorite
                          />
                        ))}

                      </div>
                    </li>

                  )
                )}

                <li className="favorites__locations-items">
                  <div className="favorites__places">

                  </div>
                </li>
              </ul>
            </section>
          </div>
        </main>
        <footer className="footer container">
          <a className="footer__logo-link" href="main.html">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
          </a>
        </footer>
      </div>
  );
}
export default PagesFavoritesContainer;
