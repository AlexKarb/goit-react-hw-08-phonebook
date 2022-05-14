import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelector } from 'redux/auth/authSelector';

export const PublicRoutes = ({ element }) => {
  const isLoggin = useSelector(authSelector.getIsLoggedIn);

  return <>{isLoggin ? <Navigate to="/contacts" replace={true} /> : element}</>;
};
