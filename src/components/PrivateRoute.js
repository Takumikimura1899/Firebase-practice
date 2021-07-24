import { Route, Redirect } from 'react-router';
import { useAuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuthContext();
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        return currentUser ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to='/login' />
        );
      }}
    />
  );
};

export default PrivateRoute;
