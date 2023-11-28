import TreeComponent from '../TreeComponent';

const TreeMenu = ({ data }) => {
  let TreeDate = [];

  for (var i = 0; i < 5; i++) {
    TreeDate.push(Number(data.Days[1] - i));
  }

  const TreeMon = data.Days[0];

  const data1 = [
    {
      id: '1',
      label: TreeMon + ' ' + TreeDate[4],
      children: [
        {
          id: '2',
          label: '3:00',
        },
        {
          id: '3',
          label: '6:00',
        },
        {
          id: '4',
          label: '9:00',
        },
      ],
    },
    {
      id: '1',
      label: TreeMon + ' ' + TreeDate[3],
      children: [
        {
          id: '2',
          label: '3:00',
        },
        {
          id: '3',
          label: '6:00',
        },
        {
          id: '4',
          label: '9:00',
        },
      ],
    },
    {
      id: '1',
      label: TreeMon + ' ' + TreeDate[2],
      children: [
        {
          id: '2',
          label: '3:00',
        },
        {
          id: '3',
          label: '6:00',
        },
        {
          id: '4',
          label: '9:00',
        },
      ],
    },
    {
      id: '1',
      label: TreeMon + ' ' + TreeDate[1],
      children: [
        {
          id: '2',
          label: '3:00',
        },
        {
          id: '3',
          label: '6:00',
        },
        {
          id: '4',
          label: '9:00',
        },
      ],
    },
    {
      id: '1',
      label: TreeMon + ' ' + TreeDate[0],
      children: [
        {
          id: '2',
          label: '3:00',
        },
        {
          id: '3',
          label: '6:00',
        },
        {
          id: '4',
          label: '9:00',
        },
      ],
    },
  ];

  return <TreeComponent data={data1} />;
};

export default TreeMenu;
