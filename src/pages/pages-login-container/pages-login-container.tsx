import { Helmet } from 'react-helmet-async';
import { useAppDispatch } from '../../hooks/hooks';

import { CityName } from '../../const';
import { Link } from 'react-router-dom';
import { loginAction, setActiveCity } from '../../store/api-actions';
import { useState } from 'react';


function PagesLoginContainer():JSX.Element {
  const dispatch = useAppDispatch();
  const [email,setEmail] = useState<string>('');
  const [password,setPassword] = useState<string>('');


  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
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
            <form className="login__form form" action="#" method="post">
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
              <Link to="http://localhost:5173/"onClick={
                ()=> {
                  dispatch(loginAction({email,password}));
                }
              }
              >
                <button className="login__submit form__submit button" type="submit">
                  Sign in
                </button>
              </Link>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="http://localhost:5173/"onClick={
                ()=> dispatch(setActiveCity(CityName.Amsterdam))
              }
              >
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
export default PagesLoginContainer;
