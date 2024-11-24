import Icon from '../Icon/Icon';
import s from './Hero.module.css';

const Hero = () => {
  return (
    <div className={s.heroSection}>
      <div className={s.smallHeading}>
        <Icon name="icon-hero-h-left" className={s.smallHeadingIconLeft} />
        <p className={s.smallHeadingText}>
          Just a month away from creating your first tattoo
        </p>
        <Icon name="icon-hero-h-right" className={s.smallHeadingIconRight} />
      </div>
      <div className={s.midHeading}>
        <h2 className={s.midHeadingText}>Create your legacy</h2>
      </div>
      <div className={s.largeHeading}>
        <h1 className={s.largeHeadingText}>Tattooing from scratch</h1>
      </div>
      <div className={s.signupButtonBox}>
        <button type="button" className={s.signupButton}>
          <p className={s.signupButtonText}>Join the course</p>
          <div className={s.signupButtonIconWrap}>
            <Icon name="icon-arrow-top-r" className={s.signupButtonIcon} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Hero;
