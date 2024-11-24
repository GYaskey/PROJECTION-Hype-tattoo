import Icon from '../Icon/Icon';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logoBox}>
        <Icon name="icon-logo" className={s.logoIcon} />
      </div>

      <button type="button" className={s.menuButton}>
        <p className={s.menuText}>Menu</p>
        <Icon name="icon-Menu" className={s.menuIcon} />
      </button>
    </header>
  );
};

export default Header;
