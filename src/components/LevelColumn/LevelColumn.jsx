import clsx from 'clsx';

import Icon from '../Icon/Icon';
import Feature from '../Feature/Feature';

import s from './LevelColumn.module.css';

const LevelColumn = ({ title, packageType, features }) => {
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
    </div>
  );
};

export default LevelColumn;
