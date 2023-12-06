import {Navigate} from 'react-router-dom';
import { AuthorizationStatus} from '../../const';
import { LoadingSpiner } from '../loading-spiner';


type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  redirectionTo: string;
  children: JSX.Element;
}

export default function PrivateRoute({ authorizationStatus, children, redirectionTo }: PrivateRouteProps): JSX.Element {
  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <LoadingSpiner />;
  }
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={redirectionTo} />
  );
}
