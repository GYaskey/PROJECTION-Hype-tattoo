import clsx from 'clsx';

import Icon from '../Icon/Icon';
import Feature from '../Feature/Feature';

import s from './LevelColumn.module.css';

const LevelColumn = ({ title, packageType, features, price, oldPrice }) => {
  return (
    <div
      className={clsx(s.levelColumn, s[`${packageType.toLowerCase()}Column`])}
    >
      <div className={s.titleIconWrapper}>
        <h3 className={s.columnTitle}>{title}</h3>
        <Icon
          name={`icon-${packageType.toLowerCase()}`}
          className={clsx(s.columnIcon, s[`${packageType.toLowerCase()}Icon`])}
        />
      </div>
      <div className={s.featureList}>
        {features.map(feature => (
          <Feature
            key={feature.id}
            feature={feature}
            isAvailable={feature[packageType]}
          />
        ))}
      </div>
      <div className={s.prices}>
        <span className={s.newPrice}>{price}$</span>
        <span className={s.oldPrice}>{oldPrice}$</span>
      </div>
      <div className={s.columnButtons}>
        <button type="button" className={s.columnButton}>
          <p className={s.columnButtonText}>Choose and proceed</p>
          <div className={s.columnButtonIconWrap}>
            <Icon name="icon-arrow-top-r" className={s.columnButtonIcon} />
          </div>
        </button>
        <button type="button" className={s.columnButton}>
          <p className={s.columnButtonText}>Consultation</p>
          <div className={s.columnButtonIconWrap}>
            <Icon name="icon-arrow-top-r" className={s.columnButtonIcon} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default LevelColumn;
