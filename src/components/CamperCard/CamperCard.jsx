import { Button } from '../ui-kit/Button/Button';
import defaultImage from '../../images/default-camper-image.png';
import sprite from '../../images/icons/sprite.svg';
import { useGenerateFeatureItems } from '../../hooks/useGenerateFeatureItems';

import { FeatureItem } from './FeatureItem/FeatureItem';
import styles from './CamperCard.module.css';

export const CamperCard = ({ camper }) => {
  console.log(camper);
  const { description, gallery, location, name, price, rating, reviews } =
    camper;

  const features = useGenerateFeatureItems(camper);

  console.log(features);

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={gallery[0] || defaultImage}
          alt="Camper title"
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{name}</h2>
        <div className={styles.priceFavoriteButtonContainer}>
          <span className={styles.price}>{`€${price.toFixed(2)}`}</span>
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
            <span className={styles.rating}>
              {rating} ({reviews.length} Reviews)
            </span>
          </div>
          <div className={styles.locationContainer}>
            <svg className={styles.locationIcon} width="16" height="16">
              <use xlinkHref={`${sprite}#location`} />
            </svg>
            <span>{location.split(', ').reverse().join(', ')}</span>
          </div>
        </div>
        <div className={styles.description}>{description}</div>
        <div className={styles.details}>
          {Object.entries(features).map((feture) => {
            const [key, value] = feture;
            return <FeatureItem iconId={key} title={value} />;
          })}
        </div>
        <Button>Show more</Button>
      </div>
    </div>
  );
};
