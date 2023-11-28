import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.css';

const MainPage = () => {
  return (
    <div className={styles.MainContainer}>
      <header>
        <p className={styles.HomeMainTextW_T}>
          Welcome to <br />
          <span className={styles.HomeMainTextW_A}>Weather App!</span>
        </p>
      </header>
      <p className={styles.Introduction}>Choose a city from the list below to check the weather.</p>
      <div className={styles.MiddleContainer}>
        <section>
          <ul className={styles.CountryList}>
            <Link href={'/Seoul'} style={{ textDecoration: 'none' }}>
              <li className={styles.Country}>Seoul</li>
            </Link>
            <Link href={'/Tokyo'} style={{ textDecoration: 'none' }}>
              <li className={styles.Country}>Tokyo</li>
            </Link>
            <Link href={'/Paris'} style={{ textDecoration: 'none' }}>
              <li className={styles.Country}>Paris</li>
            </Link>
            <Link href={'/London'} style={{ textDecoration: 'none' }}>
              <li className={styles.Country}>London</li>
            </Link>
          </ul>
        </section>
      </div>

      <Image
        className={styles.Earth}
        src={'/img/img.png'}
        alt="/"
        width={430}
        height={321}
        priority
      />
    </div>
  );
};

export default MainPage;
