import Image from 'next/image';
import useSWR from 'swr';
import fetcher from '../../util/fetcher';
import { useRouter } from 'next/router';
import TreeSidebar from '../TreeSidebar';
import style from './style.module.css';

const Apikey = process.env.REACT_APP_WEATHER_API;

const DetailPage = ({ Data, City }) => {
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
              <span>Icon</span>
              <div>
                <div>date</div>
                <div>
                  {City},{Data.sys.country}
                  <span>(인구수:81000)</span>
                </div>
              </div>
              <div>
                <div>{Data.main.temp}</div>
                <div>
                  Feels like {Data.main.feels_like} {Data.weather[0].main}풍속 {Data.wind.speed}
                  습도 {Data.main.humidity}%
                </div>
              </div>
            </div>
          </header>
          <article>
            <div className={style.DetailForcastMaincontainer}>
              <h1>5-day Forecast</h1>
              <TreeSidebar />
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default DetailPage;
