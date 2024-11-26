import clsx from 'clsx';
import Icon from '../Icon/Icon';
import s from './Menu.module.css';

const Menu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={clsx(s.menuOverlay, { [s.open]: isOpen })}>
      <div className={s.container}>
        <a href="./index.html" className={s.logoLink}>
          <Icon name="icon-logo" className={s.logo} />
        </a>
        <button className={s.closeButton} onClick={toggleMenu}>
          <p className={s.closeButtonText}>CLOSE</p>
          <Icon name="icon-close-star" className={s.closeButtonIcon} />
        </button>
        <p className={s.copyright}>
          (C) HYPE 2024
          <br /> ALL RIGHTS RESERVED
        </p>
        <div className={s.menuTop}>
          <span>[ Menu ]</span>
        </div>
        <div className={s.wrapper}>
          <div className={s.menuWrap}>
            <nav className={s.menuNavigation}>
              <ul className={s.menuNavigationList}>
                {[
                  'gift box',
                  "what you'll learn",
                  'programm',
                  'package',
                  'about artist',
                  'artist',
                  'feedback',
                  'faq',
                ].map((item, idx) => (
                  <li key={idx} className={s.menuNavigationItem}>
                    <a href="./index.html">{item}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className={s.menuWrapSecond}>
            <h2 className={s.menuTitle}>create your legacy</h2>
            <button className={s.joinLink}>
              <p className={s.joinLinkText}>JOIN THE COURSE</p>
              <div className={s.joinLinkIconWrap}>
                <Icon name="icon-arrow-top-r" className={s.joinLinkIcon} />
              </div>
            </button>
            <div className={s.menuAddressContainer}>
              <a href="mailto:hypetattoo@gmail.com" className={s.email}>
                hypetattoo@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
