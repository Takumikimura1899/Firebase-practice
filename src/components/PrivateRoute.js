import { Route, Redirect } from 'react-router';
import { AuthProvider } from '../providers/AuthProvider';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = AuthProvider();
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
