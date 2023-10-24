import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const shouldRedirect = !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirectTo: PropTypes.string,
};
