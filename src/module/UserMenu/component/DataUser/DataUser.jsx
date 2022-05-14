import { useSelector } from 'react-redux';
import { authSelector } from 'redux/auth/authSelector';
import style from '../style/userMenu.module.css';

export const DataUser = () => {
  const email = useSelector(authSelector.getUserEmail);

  return <div className={style.user_style}>Hello, {email}</div>;
};
