import TreeComponent from '../TreeComponent';

const TreeMenu = ({ data, datamain }) => {
  const Mon_List = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const Label_List = [
    `03:00am`,
    `06:00am`,
    `09:00am`,
    `12:00am`,
    `15:00am`,
    `18:00am`,
    `21:00am`,
    `00:00am`,
  ];

  let lastday = new Date(data.Years, data.Months, 0).toString().split(' ')[2];
  let treedata = [];
  let j = 0;
  
  for (var i = 0; i < 5; i++) {
    let temp = {
      id: 0,
      label: Mon_List[data.Months - 1],
      date: data.Days,
      children: [],
    };
    temp.id = i;
    temp.date += i;
    if (temp.date > Number(lastday)) {
      temp.date = temp.date - Number(lastday);
      temp.label = Mon_List[data.Months];
    }
    Label_List.map((e, index) => {
      temp.children.push({
        id: j,
        icon: datamain[j].weather[0].icon,
        label: e,
        temp: `${datamain[j].main.temp_max}℃ / ${datamain[j].main.temp_min}℃`,
        sky: datamain[j].weather[0].main,
      });
      j += 1;
    });
    treedata.push(temp);
  }

  return <TreeComponent data={treedata} />;
};

export default TreeMenu;
