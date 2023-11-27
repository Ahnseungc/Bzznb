import DetailPage from '../component/DetailPage';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import fetcher from '../util/fetcher';

const Detail = () => {
  const router = useRouter();
  let City = router.asPath.slice(1);
  const { data, error } = useSWR(
    `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=2834387742b25d5393a21e88fee8246a`,
    fetcher,
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <>
      <DetailPage Data={data} City={City} />
    </>
  );
};

export default Detail;
