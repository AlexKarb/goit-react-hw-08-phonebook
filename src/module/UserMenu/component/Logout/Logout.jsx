import { useDispatch } from 'react-redux';
import { logOutUser } from 'redux/auth/authOperation';
import style from '../style/userMenu.module.css';

export const LogOut = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button
        type="button"
        className={style.logout_btn}
        onClick={() => {
          dispatch(logOutUser());
        }}
      >
        logout
      </button>
    </>
  );
};
