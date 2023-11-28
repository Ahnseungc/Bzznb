import Image from 'next/image';
import BranchComponent from '../BranchComponent';

const TreeComponent = ({ data }) => {
  return (
    <>
      {data.map((child) => {
        return <BranchComponent key={child.id} branch={child} />;
      })}
    </>
  );
};

export default TreeComponent;
