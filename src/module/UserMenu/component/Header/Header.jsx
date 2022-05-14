import style from '../style/userMenu.module.css';

export const Header = ({ children }) => (
  <div className={style.header_style}>{children} </div>
);
