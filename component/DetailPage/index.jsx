import Image from 'next/image';
import useSWR from 'swr';
import fetcher from '../../util/fetcher';
import { useRouter } from 'next/router';
import TreeMenu from '../TreeMenu';
import style from './style.module.css';

const Timedic = (dt) => {
  let unix_timestamp = dt;
  const date = new Date(unix_timestamp * 1000);

  var days = date.toDateString().split(' ').slice(1, 3);
  console.log(date.toDateString().split(' ').slice(1, 3));
  var hours = date.getHours();
  var minutes = '0' + date.getMinutes();
  var formattedTime = hours + ':' + minutes.substr(-2);
  var TImeObject = {
    Days: days,
    FormattedTime: formattedTime,
  };
  return TImeObject;
};

const DetailPage = ({ Data, City }) => {
  const Current_lat_lon = {
    lat: Data.coord.lat,
    lon: Data.coord.lon,
  };

  const { data, error } = useSWR(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${Current_lat_lon.lat}&lon=${Data.coord.lon}&exclude=alerts&appid=a6e0bc5c87d368a340f8466aa72a89cb&units=metric`,
    fetcher,
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const DateAfter = Timedic(data.current.dt);

  console.log(data);

  const WeatherIcon = `https://openweathermap.org/img/wn/${Data.weather[0].icon}@2x.png`;

  return (
    <div className={style.DetailMaincontainer}>
      <header>
        <div className={style.DetailMainHeadercontainer}>
          <Image src={'/img/img2.png'} width={68} height={51} alt="/" />
          <h1>Weather Information for {City}</h1>
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
                    {DateAfter.Days[0]} {DateAfter.Days[1]}, {DateAfter.FormattedTime}
                  </p>
                  <div>
                    {City},{Data.sys.country}
                    <span>(인구수:81000)</span>
                  </div>
                </div>
              </div>
              <div className={style.DetailCountryRightDatecontainer}>
                <span>{Data.main.temp}℃</span>
                <div>
                  Feels like {Data.main.feels_like}℃ {Data.weather[0].main} 풍속m/s{' '}
                  {Data.wind.speed} 습도 {Data.main.humidity}%
                </div>
              </div>
            </div>
          </header>
          <article>
            <div className={style.DetailForcastMaincontainer}>
              <h2>5-day Forecast</h2>
              <TreeMenu data={DateAfter} />
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default DetailPage;
