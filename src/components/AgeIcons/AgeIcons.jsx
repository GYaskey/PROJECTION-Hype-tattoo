import Icon from '../Icon/Icon';
import s from './AgeIcons.module.css';

const AgeIcons = ({ fillColor = '#fff' }) => {
  return (
    <div className={`${s.iconGroup} hoverable`}>
      <Icon name="icon-target" className={s.iconTarget} fill={fillColor} />
      <Icon name="icon-whirl" className={s.iconWhirl} fill={fillColor} />
      <Icon
        name="icon-geom-small"
        className={s.iconGeomSmall}
        fill={fillColor}
      />
      <Icon name="icon-globe" className={s.iconGlobe} fill={fillColor} />
      <Icon name="icon-geom-big" className={s.iconGeomBig} fill={fillColor} />
      <Icon name="icon-whirl" className={s.iconWhirl} fill={fillColor} />
      <Icon name="icon-target" className={s.iconTarget} fill={fillColor} />
    </div>
  );
};

export default AgeIcons;
