import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import { useAppSelector } from '../../hooks/hooks';
import { getAuthorizationStatus } from '../../store/selectors';


type RedirectProps = {
  children: JSX.Element;
}

export default function PublicRoute ({children} : RedirectProps) {
  const status = useAppSelector(getAuthorizationStatus);
  return (
    status !== AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Main} />
  );
}
