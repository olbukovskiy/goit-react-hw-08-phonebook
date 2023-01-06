import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';

import { refreshCurrentUser } from 'redux/user/operations';
import { selectIsRefreshing } from 'redux/user/selectors';

import { PublicRoute } from 'components/PublicRoute';
import { PrivateRoute } from 'components/PrivateRoute';

import { SharedLayout } from 'components/SharedLayout/SharedLayout';

const Register = lazy(() =>
  import('pages/Register').then(module => ({
    ...module,
    default: module.Register,
  }))
);

const Login = lazy(() =>
  import('pages/Login').then(module => ({
    ...module,
    default: module.Login,
  }))
);

const Contacts = lazy(() =>
  import('pages/Contacts').then(module => ({
    ...module,
    default: module.Contacts,
  }))
);

const Home = lazy(() =>
  import('pages/Home').then(module => ({
    ...module,
    default: module.Home,
  }))
);

export function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <Oval
          ariaLabel="loading-indicator"
          height={100}
          width={100}
          strokeWidth={5}
          strokeWidthSecondary={1}
          color="blue"
          secondaryColor="white"
          wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
        />
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route
              path="/register"
              element={
                <PublicRoute component={<Register />} redirectTo="/contacts" />
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute component={<Login />} redirectTo="/contacts" />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute component={<Contacts />} redirectTo="/login" />
              }
            />
          </Route>
        </Routes>
      )}
    </>
  );
}
