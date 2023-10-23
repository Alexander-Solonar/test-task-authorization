import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const Contacts = lazy(() => import('pages/contacts'));
const Login = lazy(() => import('pages/login/Login'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/"
          element={<RestrictedRoute redirectTo="/contacts" component={Login} />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute redirectTo="/" component={Contacts} />}
        />
      </Route>
    </Routes>
  );
};
