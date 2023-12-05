import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import { useAppSelector } from '../../hooks/hooks';
import { getAuthorizationStatus } from '../../store/selectors';


type PrivateRouteProps = {
  children: JSX.Element;
}

export default function PrivateRoute({children} : PrivateRouteProps): JSX.Element {
  const status = useAppSelector(getAuthorizationStatus);
  return (
    status === AuthorizationStatus.NoAuth
      ? <Navigate to={AppRoute.Login} />
      : children
  );
}
