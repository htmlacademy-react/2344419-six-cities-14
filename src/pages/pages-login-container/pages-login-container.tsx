import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { AppRoute, AuthorizationStatus, CityN, CityName } from '../../const';
import { Link, useNavigate } from 'react-router-dom';
import { loginAction, setActiveCity } from '../../store/api-actions';
import { FormEvent, useEffect, useState } from 'react';
import { getAuthorizationStatus } from '../../store/selectors';


function PagesLoginContainer():JSX.Element {
  const dispatch = useAppDispatch();
  const [email,setEmail] = useState<string>('');
  const [password,setPassword] = useState<string>('');
  const checkPassword = /^(?=.*[A-Za-zА-Яа-я])(?=.*\d).+$/.test(password);
  const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const randomCity = Math.floor(Math.random() * (Object.keys(CityName).length));
  const City = CityN[randomCity];
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();

  useEffect(()=>{
    if(authorizationStatus === AuthorizationStatus.Auth){
      navigate(AppRoute.Main);
    }
  },[authorizationStatus, navigate]);

  function formSubmitHandler(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    if (!email || !password) {
      return;
    }
    dispatch(loginAction({email,password}));
  }


  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to={AppRoute.Main} >
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <Helmet>
              <title>
                Вход и регистрация
              </title>
            </Helmet>
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={formSubmitHandler}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  onChange={(evt)=>{
                    setEmail(evt.target.value);

                  }} className="login__input form__input" type="email" name="email" placeholder="Email" value={email} required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input onChange={(evt)=>{
                  setPassword(evt.target.value);

                }}
                className="login__input form__input" type="password" name="password" placeholder="Password" value={password} required
                />
              </div>

              <button className="login__submit form__submit button" type="submit" disabled={!checkEmail || !checkPassword}>
                  Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Main} onClick={
                ()=> dispatch(setActiveCity(City))
              }
              >
                <span>{City}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
export default PagesLoginContainer;
