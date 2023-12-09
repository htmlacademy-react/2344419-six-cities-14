import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import {
  getAuthorizationStatus,
  getFavorites,
  getUser,
} from '../store/selectors';
import { logoutAction } from '../store/api-actions';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favorites = useAppSelector(getFavorites);
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  function signOutClickHandler() {
    dispatch(logoutAction());
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              className="header__logo-link header__logo-link--active"
              to={AppRoute.Main}
            >
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          <nav className="header__nav">
            {authorizationStatus === AuthorizationStatus.Auth ? (
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoute.Favorites}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">{user}</span>
                    <span className="header__favorite-count">
                      {favorites.length}
                    </span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="#">
                    <span
                      className="header__signout"
                      onClick={signOutClickHandler}
                    >
                      Sign out
                    </span>
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="header__nav-list">
                <li className="header__nav-item">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href={AppRoute.Login}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__login">Sign in</span>
                  </a>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;
