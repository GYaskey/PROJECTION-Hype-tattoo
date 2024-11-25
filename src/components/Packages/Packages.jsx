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
          price={2990}
          oldPrice={3990}
        />
        <LevelColumn
          title="Hyper"
          packageType="hyper"
          features={featuresArray}
          price={3990}
          oldPrice={5990}
        />
        <LevelColumn
          title="Blast"
          packageType="blast"
          features={featuresArray}
          price={6990}
          oldPrice={8990}
        />
      </div>
    </div>
  );
};

export default Packages;
