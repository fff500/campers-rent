import { Button } from '../ui-kit/Button/Button';
import defaultImage from '../../images/default-camper-image.png';

import styles from './CamperCard.module.css';

export const CamperCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={defaultImage} alt="Camper title" className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Kuga Camper</h2>
        <div className={styles.ratingLocationContainer}>
          <div className={styles.rating}>Rating</div>
          <div className={styles.location}>Location</div>
        </div>
        <div className={styles.description}>
          The pictures shown here are example vehicles of the respective.
        </div>
        <div className={styles.details}>Details</div>
        <Button>Show more</Button>
      </div>
    </div>
  );
};
