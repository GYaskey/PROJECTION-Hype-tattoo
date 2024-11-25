import { useState } from 'react';
import Icon from '../Icon/Icon';
import Menu from '../Menu/Menu';
import s from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <>
      <header className={s.header}>
        <div className={s.logoBox}>
          <Icon name="icon-logo" className={s.logoIcon} />
        </div>

        <button type="button" className={s.menuButton} onClick={toggleMenu}>
          <p className={s.menuText}>Menu</p>
          <Icon name="icon-Menu" className={s.menuIcon} />
        </button>
      </header>

      <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Header;
