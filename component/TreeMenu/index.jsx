import TreeComponent from '../TreeComponent';

const TreeMenu = ({ data, daily }) => {
  let Mon_List = [
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

  let lastday = new Date(data.Years, data.Months, 0).toString().split(' ')[2];
  let treedata = [];
  console.log(daily);

  for (var i = 1; i < 6; i++) {
    let temp = {
      id: i,
      label: Mon_List[data.Months - 1],
      date: data.Days,
      children: [
        {
          id: i + 1,
          icon: daily[i].weather[0].icon,
          label: `03:00am`,
          temp: `${daily[i].temp.max}℃ / ${daily[i].temp.min}℃`,
          sky: daily[i].weather[0].description,
        },

        {
          id: i + 2,
          icon: daily[i].weather[0].icon,
          label: '06:00am',
          temp: `${daily[i].temp.max}℃ / ${daily[i].temp.min}℃`,
          sky: daily[i].weather[0].description,
        },
        {
          id: i + 3,
          icon: daily[i].weather[0].icon,
          label: '09:00am',
          temp: `${daily[i].temp.max}℃ / ${daily[i].temp.min}℃`,
          sky: daily[i].weather[0].description,
        },
        {
          id: i + 4,
          icon: daily[i].weather[0].icon,
          label: '12:00am',
          temp: `${daily[i].temp.max}℃ / ${daily[i].temp.min}℃`,
          sky: daily[i].weather[0].description,
        },
        {
          id: i + 5,
          icon: daily[i].weather[0].icon,
          label: '15:00am',
          temp: `${daily[i].temp.max}℃ / ${daily[i].temp.min}℃`,
          sky: daily[i].weather[0].description,
        },
        {
          id: i + 6,
          icon: daily[i].weather[0].icon,
          label: '18:00am',
          temp: `${daily[i].temp.max}℃ / ${daily[i].temp.min}℃`,
          sky: daily[i].weather[0].description,
        },
        {
          id: i + 7,
          icon: daily[i].weather[0].icon,
          label: '21:00am',
          temp: `${daily[i].temp.max}℃ / ${daily[i].temp.min}℃`,
          sky: daily[i].weather[0].description,
        },
      ],
    };
    temp.date += i;
    if (temp.date > Number(lastday)) {
      temp.date = temp.date - Number(lastday);
      temp.label = Mon_List[data.Months];
    }
    treedata.push(temp);
  }
  console.log(treedata);

  return <TreeComponent data={treedata} />;
};

export default TreeMenu;
