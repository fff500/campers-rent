import { CamperCard } from '../../components/CamperCard/CamperCard';
import { Button } from '../../components/ui-kit/Button/Button';

import styles from './Catalog.module.css';

const Catalog = () => {
  return (
    <>
      <div>
        <ul className={styles.cardsList}>
          <li>
            <CamperCard />
          </li>
        </ul>
      </div>
      <Button variant="transparent">Load more</Button>
    </>
  );
};

export default Catalog;
