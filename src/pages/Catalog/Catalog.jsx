import { CamperCard } from '../../components/CamperCard/CamperCard';
import { Button } from '../../components/ui-kit/Button/Button';

import styles from './Catalog.module.css';

const Catalog = () => {
  return (
    <>
      <h1>Catalog</h1>
      <ul className={styles.cardsList}>
        <li>
          <CamperCard />
        </li>
      </ul>
      <Button variant="transparent">Load more</Button>
    </>
  );
};

export default Catalog;
