import dynamic from 'next/dynamic';

const MainPage = dynamic(import('../component/MainPage'), {
  loading: () => <p>loading...</p>,
});

export default function Home() {
  return (
    <div>
      <MainPage />
    </div>
  );
}
