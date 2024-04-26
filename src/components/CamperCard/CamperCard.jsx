import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../ui-kit/Button/Button';
import { ModalWindow } from '../ui-kit/ModalWindow/ModalWindow';
import { FeatureItem } from '../FeatureItem/FeatureItem';
import { CamperInfoModal } from '../CamperInfoModal/CamperInfoModal';
import { RatingLocationBlock } from '../RatingLocationBlock/RatingLocationBlock';
import { useGenerateFeatureItems } from '../../hooks/useGenerateFeatureItems';
import { addFavorite, removeFavorite } from '../../store/favoritesSlice';
import { getFavorites } from '../../store/selectors';
import defaultImage from '../../images/default-camper-image.png';
import sprite from '../../images/icons/sprite.svg';

import styles from './CamperCard.module.css';

export const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const favorites = useSelector(getFavorites);

  const { _id, description, gallery, location, name, price, rating, reviews } =
    camper;

  const isFavorite = favorites.some((favorite) => favorite._id === _id);

  const handleFavoritesButtonClick = () => {
    if (isFavorite) dispatch(removeFavorite(_id));
    else dispatch(addFavorite(camper));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate('/catalog', { replace: true });
  };

  const features = useGenerateFeatureItems(camper);

  return (
    <>
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
            <button
              className={styles.fovoriteButton}
              onClick={handleFavoritesButtonClick}
            >
              <svg
                className={`${styles.fovoriteButtonIcon} ${
                  isFavorite && styles.isFavorite
                }`}
                width="24"
                height="24"
              >
                <use xlinkHref={`${sprite}#favorite`} />
              </svg>
            </button>
          </div>
          <RatingLocationBlock
            rating={rating}
            reviewsQuantity={reviews.length}
            location={location}
          />
          <div className={styles.description}>{description}</div>
          <div className={styles.details}>
            {features.map((feture) => {
              const [key, value] = feture;
              return <FeatureItem key={key} iconId={key} title={value} />;
            })}
          </div>
          <Button onClick={() => setIsModalOpen(true)}>Show more</Button>
        </div>
      </div>
      {isModalOpen && (
        <ModalWindow isOpen={isModalOpen} onClose={handleCloseModal}>
          <CamperInfoModal camper={camper} />
        </ModalWindow>
      )}
    </>
  );
};
