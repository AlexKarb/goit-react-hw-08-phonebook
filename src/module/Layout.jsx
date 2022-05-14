import { Outlet } from 'react-router-dom';
import { UserMenu } from 'module/UserMenu';

const Layout = () => (
  <>
    <UserMenu />
    <Outlet />
  </>
);
export default Layout;
