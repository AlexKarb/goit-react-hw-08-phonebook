import { Link } from 'react-router-dom';
import style from '../style/userMenu.module.css';

export const LogInSingUp = () => {
  return (
    <div className={style.login_container_style}>
      <Link to="/register" className={style.logout_btn}>
        Sign Up
      </Link>
      <Link to="/login" className={style.logout_btn}>
        Log In
      </Link>
    </div>
  );
};
