import TreeSidebarItem from '../TreeSidebarItem';

const TreeSidebar = ({ items }) => {
  const data = [
    { name: '23', date: '23일' },
    { name: '23', date: '23일' },
    { name: '23', date: '23일' },
    { name: '23', date: '23일' },
    { name: '23', date: '23일' },
  ];

  return (
    <div>
      {data.map((item, index) => {
        return (
          <>
            <h1>날짜</h1>
            <TreeSidebarItem item={item} key={index} />
          </>
        );
      })}
    </div>
  );
};

export default TreeSidebar;
