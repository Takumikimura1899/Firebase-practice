import { Route, Redirect } from 'react-router';
import { useAuthContext } from '../providers/AuthProvider';

// ...restにはPrivateRouteに設定されていつpropsのpathとexactの値が入っている。
// component:Componentでパスの小文字を大文字にして各コンポーネントとしている
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

// こういう事らしい。
// const PrivateRoute = ({ component, exact, path }) => {
//   const { user } = useAuthContext();
//   return user ? (
//     <Route exact={exact} path={path} component={component} />
//   ) : (
//     <Redirect to='/login' />
//   );
// };
