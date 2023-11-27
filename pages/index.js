import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
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
            <li className={styles.Country}>
              <Link href={'/'} style={{ textDecoration: 'none', color: '#FF0045' }}>
                Seoul
              </Link>
            </li>
            <li className={styles.Country}>
              <Link href={'/'} style={{ textDecoration: 'none', color: '#FF0045' }}>
                Tokyo
              </Link>
            </li>
            <li className={styles.Country}>
              <Link href={'/'} style={{ textDecoration: 'none', color: '#FF0045' }}>
                Paris
              </Link>
            </li>
            <li className={styles.Country}>
              <Link href={'/'} style={{ textDecoration: 'none', color: '#FF0045' }}>
                London
              </Link>
            </li>
          </ul>
        </section>
      </div>
      <Image className={styles.Earth} src={'/img/img.png'} alt="/" width={430} height={321} />
    </div>
  );
}
