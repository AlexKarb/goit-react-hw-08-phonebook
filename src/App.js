import Layout from 'module/Layout';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { refreshUser } from 'redux/auth/authOperation';
import { PrivateRoutes } from 'routes/PrivateRoutes';
import { PublicRoutes } from 'routes/PublicRoutes';
import { authSelector } from 'redux/auth/authSelector';
import { Spiner } from 'module/Utils';

const LoginForm = lazy(() => import('./module/Login'));
const Register = lazy(() => import('./module/Register'));
const Contact = lazy(() => import('./module/Contact'));

export const App = () => {
  const isRefresh = useSelector(authSelector.getIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefresh && <Spiner />}
      {isRefresh === false && (
        <BrowserRouter>
          <Suspense fallback={<></>}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route
                  index
                  path="/"
                  element={<Navigate to="/contacts" replace={true} />}
                />

                <Route
                  path="login"
                  element={<PublicRoutes element={<LoginForm />} />}
                />

                <Route
                  path="register"
                  element={<PublicRoutes element={<Register />} />}
                />

                <Route
                  path="contacts"
                  element={<PrivateRoutes element={<Contact />} />}
                />

                <Route
                  path="*"
                  element={<Navigate to="/contacts" replace={true} />}
                />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      )}
    </>
  );
};
