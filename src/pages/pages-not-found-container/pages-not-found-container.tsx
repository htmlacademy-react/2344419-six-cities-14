import { Helmet } from 'react-helmet-async';
import {Link} from 'react-router-dom';

function PagesNotFoundContainer():JSX.Element{
  return(
    <div style={{ marginTop: 100}}>
      <Helmet>
        <title>
          Ошибка!
        </title>
      </Helmet>
      <h1 className="offer__name">
    404 Not Found
        <br/>
        <Link className="header__logo-link" to="http://localhost:5173/">
         Вернуться на главную страницу
        </Link>
      </h1>
    </div>
  );
}
export default PagesNotFoundContainer;
