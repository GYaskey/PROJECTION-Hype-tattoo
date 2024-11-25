import s from './Packages.module.css';
import LevelColumn from '../LevelColumn/LevelColumn';
import featuresArray from '../../source/featuresArray';

const Packages = () => {
  return (
    <div className={s.packagesSection}>
      <h2 className={s.packagesSectionTitle}>Pick Your Path</h2>
      <div className={s.columnsContainer}>
        <LevelColumn
          title="Quantum"
          packageType="quantum"
          features={featuresArray}
        />
        <LevelColumn
          title="Hyper"
          packageType="hyper"
          features={featuresArray}
        />
        <LevelColumn
          title="Blast"
          packageType="blast"
          features={featuresArray}
        />
      </div>
    </div>
  );
};

export default Packages;
