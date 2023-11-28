import Image from 'next/image';
import useSWR from 'swr';
import fetcher from '../../util/fetcher';
import dynamic from 'next/dynamic';
import TreeMenu from '../TreeMenu';
import style from './style.module.css';
import useTime from '../../util/useTime';

const DetailPage = ({ Data }) => {
  const Current_lat_lon = {
    lat: Data.coord.lat,
    lon: Data.coord.lon,
  };

  const { data, error } = useSWR(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${Current_lat_lon.lat}&lon=${Data.coord.lon}&exclude=alerts&appid=a6e0bc5c87d368a340f8466aa72a89cb&units=metric`,
    fetcher,
    { dedupingInterval: 1000 }, // 1초
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const DateAfter = useTime(data.list[0].dt);
  const DateAfter2 = DateAfter.Months_str.split(' ');

  const WeatherIcon = `https://openweathermap.org/img/wn/${Data.weather[0].icon}@2x.png`;

  return (
    <div className={style.DetailMaincontainer}>
      <header>
        <div className={style.DetailMainHeadercontainer}>
          <Image src={'/img/img2.png'} width={68} height={51} alt="/" />
          <h1>Weather Information for {data.city.name}</h1>
        </div>
      </header>
      <section>
        <div className={style.DetailSectionMaincontainer}>
          <header>
            <div className={style.DetailCountryMaincontainer}>
              <div className={style.DetailCountryLeftcontainer}>
                <img src={WeatherIcon} alt="/"></img>
                <div className={style.DetailCountryLeftDatecontainer}>
                  <p>
                    {DateAfter2[1]} {DateAfter2[2]}, {DateAfter.FormattedTime}
                  </p>
                  <div>
                    {data.city.name},{data.city.country}
                    <span>(인구수:81000)</span>
                  </div>
                </div>
              </div>
              <div className={style.DetailCountryRightDatecontainer}>
                <span>{data.list[0].main.temp}℃</span>
                <div>
                  Feels like {data.list[0].main.feels_like}℃ {data.list[0].weather[0].main} 풍속m/s{' '}
                  {Data.wind.speed} 습도 {data.list[0].main.humidity}%
                </div>
              </div>
            </div>
          </header>
          <article>
            <div className={style.DetailForcastMaincontainer}>
              <h2>5-day Forecast</h2>
              <TreeMenu data={DateAfter} datamain={data.list} />
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default DetailPage;
