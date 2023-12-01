import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { TypeOffer } from '../../types/types-data';
import PagesCard from '../../components/card';
import { getFavorites, getUser } from '../../store/selectors';
import { setActiveCity } from '../../store/api-actions';
import { CityName } from '../../const';
import { Link } from 'react-router-dom';

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
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();


  const favoriteByCity = getFavoriteByCity(favorites);
  return(
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{user}</span>
                    <span className="header__favorite-count">{favorites.length}</span>
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
