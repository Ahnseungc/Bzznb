import Image from 'next/image';
import { useState, useCallback } from 'react';
import styles from './style.module.css';

const BrachComponent = ({ branch }) => {
  const hasChildren = branch.children && branch.children.length;
  const [open, toggleOpen] = useState(false);

  return (
    <div>
      <div onClick={() => toggleOpen(!open)} key={branch.id} className={styles.BranchComponent}>
        <p>{branch.label}</p>
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
          return <BrachComponent key={e.id} branch={e} />;
        })}
    </div>
  );
};

export default BrachComponent;
