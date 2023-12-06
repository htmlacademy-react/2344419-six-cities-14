import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';


type RedirectProps = {
  children: JSX.Element;
  authorizationStatus: AuthorizationStatus;
}

export default function PublicRoute ({ children, authorizationStatus } : RedirectProps) {
  return(
    authorizationStatus === AuthorizationStatus.NoAuth
      ? children
      : <Navigate to={AppRoute.Main} />
  );
}
