import { useEffect, useState } from 'react';
import AgeIcons from '../AgeIcons/AgeIcons';
import Icon from '../Icon/Icon';
import s from './Audience.module.css';
import clsx from 'clsx';

const Audience = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    const handleChange = e => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    setIsMobile(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <div className={s.audienceSection}>
      <h2 className={s.audienceSectionTitle}>Who is this course for?</h2>
      <div className={s.cardsWrapperTop}>
        <div className={s.newbiesCard}>
          <div className={s.counterIconMobileWrap}>
            <p className={clsx(s.counter, s.newbieCounter)}>
              _001/
              <span className={s.counterAccent}>004</span>
            </p>
            <Icon name="icon-newbie" className={s.newbiesCardIconMobile} />
          </div>
          <h3 className={clsx(s.cardTitle, s.newbieTitle)}>Newbies</h3>
          <p className={clsx(s.cardText, s.newbieText)}>
            Never held a tattoo machine? No problem! This course will take you
            from zero to your first masterpiece.
          </p>
          <Icon name="icon-newbie" className={s.newbiesCardIcon} />
        </div>
        <div className={s.cardsWrapperMid}>
          <div className={s.cardsWrapperLow}>
            <div className={s.smallCard}>
              <div className={s.counterIconWrapper}>
                <p className={s.counter}>
                  _002/
                  <span className={s.counterAccent}>004</span>
                </p>
                <Icon
                  name="icon-young-pr"
                  className={s.youngProfessionalsCardIcon}
                />
              </div>
              <h3 className={s.cardTitle}>Young Professionals</h3>
              <p className={s.cardText}>
                Already have a few tattoos and thinking about taking your skills
                to the next level? We`ll help you refine your technique and
                build the confidence.
              </p>
            </div>
            <div className={s.smallCard}>
              <div className={s.counterIconWrapper}>
                <p className={s.counter}>
                  _003/
                  <span className={s.counterAccent}>004</span>
                </p>
                <Icon
                  name="icon-adv-learn"
                  className={s.advancedLearnersCardIcon}
                />
              </div>
              <h3 className={s.cardTitle}>Advanced Learners</h3>
              <p className={s.cardText}>
                Got the basics down? Time to kick it up a notch! This course
                will sharpen your skills and teach you the advanced techniques
                that turn good tattoos into great ones.
              </p>
            </div>
            <div className={s.smallCard}>
              <div className={s.counterIconWrapper}>
                <p className={s.counter}>
                  _004/
                  <span className={s.counterAccent}>004</span>
                </p>
                <Icon name="icon-t-vet" className={s.tattooVeteransCardIcon} />
              </div>
              <h3 className={s.cardTitle}>Tattoo Veterans</h3>
              <p className={s.cardText}>
                Seen it all, inked it all? Almost! This course will refresh your
                skills, introduce new trends, and give you a few tricks even
                seasoned pros can appreciate.
              </p>
            </div>
          </div>
          <div
            className={s.ageWarningCard}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={s.ageWarningIconsGroup}>
              <AgeIcons fillColor={isHovered ? '#000' : '#fff'} />
              {!isMobile && (
                <AgeIcons fillColor={isHovered ? '#000' : '#fff'} />
              )}
            </div>
            <p className={s.ageWarningText}>
              To be able to participate in this course you must be over 18 years
              old.
            </p>
            <div className={s.ageWarningIconsGroup}>
              <AgeIcons fillColor={isHovered ? '#000' : '#fff'} />
              {!isMobile && (
                <AgeIcons fillColor={isHovered ? '#000' : '#fff'} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audience;
