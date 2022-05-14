import { useSelector } from 'react-redux';
import { authSelector } from 'redux/auth/authSelector';
import { DataUser, Header } from 'module/UserMenu/component';
import { LogInSingUp, LogOut } from 'module/UserMenu/component';

export const UserMenu = () => {
  const isLoggin = useSelector(authSelector.getIsLoggedIn);

  return (
    <Header>
      {isLoggin && (
        <>
          <DataUser />
          <LogOut />
        </>
      )}
      {!isLoggin && <LogInSingUp />}
    </Header>
  );
};
