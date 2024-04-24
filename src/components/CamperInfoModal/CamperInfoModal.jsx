import { RatingLocationBlock } from '../RatingLocationBlock/RatingLocationBlock';
import defaultImage from '../../images/default-camper-image.png';

import styles from './CamperInfoModal.module.css';

export const CamperInfoModal = ({ camper }) => {
  const { _id, description, gallery, location, name, price, rating, reviews } =
    camper;
  console.log(camper);
  return (
    <>
      <h2 className={styles.title}>{name}</h2>
      <RatingLocationBlock
        rating={rating}
        reviewsQuantity={reviews.length}
        location={location}
      />
      <div className={styles.price}>{`€${price.toFixed(2)}`}</div>
      <div className={styles.gallery}>
        {gallery.map((item) => (
          <div className={styles.imageContainer}>
            <img
              src={item || defaultImage}
              alt="Camper title"
              className={styles.image}
            />
          </div>
        ))}
      </div>
      <div className={styles.description}>{description}</div>
    </>
  );
};
