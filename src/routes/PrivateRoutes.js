import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelector } from 'redux/auth/authSelector';

export const PrivateRoutes = ({ element }) => {
  const isLoggin = useSelector(authSelector.getIsLoggedIn);

  return <>{isLoggin ? element : <Navigate to="/login" replace={true} />}</>;
};
