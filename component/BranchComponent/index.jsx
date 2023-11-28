import { useState, useCallback } from 'react';
import styles from './style.module.css';
import Image from 'next/image';

const BrachComponent = ({ branch, icon, sky, temp }) => {
  const hasChildren = branch.children && branch.children.length;
  const [open, toggleOpen] = useState(false);

  const BranchWeatherIcon = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div>
      <div onClick={() => toggleOpen(!open)} className={styles.BranchComponent}>
        {!hasChildren ? (
          <div className={styles.BranchComponentOpen}>
            <div className={styles.BranchChildOpenLeftContainer}>
              <img src={BranchWeatherIcon} alt="/" />
              <div className={styles.BranchChildClock}>{branch.label}</div>
            </div>
            <div className={styles.BranchChildOpenRightContainer}>
              <div className={styles.BranchChildSky}>{sky}</div>
              <div className={styles.BranchChildTemp}>{temp}</div>
            </div>
          </div>
        ) : (
          <p>
            {branch.label} {branch.date}
          </p>
        )}

        {hasChildren &&
          (open ? (
            <Image src="/img/UpArrow.png" width={24} height={24} alt="/" />
          ) : (
            <Image src="/img/DownArrow.png" width={24} height={24} alt="/" />
          ))}
      </div>
      {open &&
        hasChildren &&
        branch.children?.map((e) => {
          console.log(e);
          return <BrachComponent key={e.id} branch={e} icon={e.icon} sky={e.sky} temp={e.temp} />;
        })}
    </div>
  );
};

export default BrachComponent;
