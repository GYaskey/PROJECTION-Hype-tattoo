import clsx from 'clsx';
import Icon from '../Icon/Icon';
import s from './Feature.module.css';

const Feature = ({ feature, isAvailable }) => {
  const featureClass = clsx(s.feature, {
    [s.disabledFeature]: !isAvailable,
  });

  return (
    <div className={featureClass}>
      <div className={s.featureIconTitleWrapper}>
        <Icon name={feature.icon} className={s.featureIcon} />
        <h4 className={s.featureTitle}>{feature.title}</h4>
      </div>

      <p className={s.featureContent}>{feature.content}</p>
    </div>
  );
};

export default Feature;
