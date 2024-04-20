import { Link } from 'react-router-dom';

import styles from './Home.module.css';

const Home = () => {
  return (
    <>
      <h1 className={styles.pageTitle}>Campers Rent</h1>
      <p className={styles.description}>We rent out campers.</p>
      <p>
        Look what we got for you in our{' '}
        <Link className={styles.catalogLink} to="/catalog">
          Catalog
        </Link>
        .
      </p>
    </>
  );
};

export default Home;
