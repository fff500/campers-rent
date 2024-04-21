import { Button } from '../ui-kit/Button/Button';
import defaultImage from '../../images/default-camper-image.png';
import sprite from '../../images/icons/sprite.svg';

import { FeatureItem } from './FeatureItem/FeatureItem';
import styles from './CamperCard.module.css';

export const CamperCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={defaultImage} alt="Camper title" className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Kuga Camper</h2>
        <div className={styles.priceFavoriteButtonContainer}>
          <span className={styles.price}>€8000.00</span>
          <button className={styles.fovoriteButton}>
            <svg className={styles.fovoriteButtonIcon} width="24" height="24">
              <use xlinkHref={`${sprite}#favorite`} />
            </svg>
          </button>
        </div>
        <div className={styles.ratingLocationContainer}>
          <div className={styles.ratingContainer}>
            <svg width="16" height="16">
              <use xlinkHref={`${sprite}#star`} />
            </svg>
            <span className={styles.rating}>4.4 (2 Reviews)</span>
          </div>
          <div className={styles.locationContainer}>
            <svg className={styles.locationIcon} width="16" height="16">
              <use xlinkHref={`${sprite}#location`} />
            </svg>
            <span>Kyiv, Ukraine</span>
          </div>
        </div>
        <div className={styles.description}>
          The pictures shown here are example vehicles of the respective.
        </div>
        <div className={styles.details}>
          <FeatureItem iconId={'transmission'} title={'automatic'} />
          <FeatureItem iconId={'transmission'} title={'automatic'} />
          <FeatureItem iconId={'fuel'} title={'petrol'} />
          <FeatureItem iconId={'transmission'} title={'automatic'} />
          <FeatureItem iconId={'transmission'} title={'automatic'} />
          <FeatureItem iconId={'transmission'} title={'automatic'} />
          <FeatureItem iconId={'transmission'} title={'automatic'} />
        </div>
        <Button>Show more</Button>
      </div>
    </div>
  );
};
