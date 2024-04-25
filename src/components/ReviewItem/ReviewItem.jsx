import sprite from '../../images/icons/sprite.svg';

import styles from './ReviewItem.module.css';

export const ReviewItem = ({ review }) => {
  const { comment, reviewer_name, reviewer_rating } = review;

  return (
    <div>
      <div className="reviewTop">
        <div className="avatar"></div>
        <div className="ratingTitleContainer">
          <h3 className="title">{reviewer_name}</h3>
          <div className={styles.rating}>
            <svg className={styles.starIcon} width="16" height="16">
              <use xlinkHref={`${sprite}#star`} />
            </svg>
            <svg className={styles.starIcon} width="16" height="16">
              <use xlinkHref={`${sprite}#star`} />
            </svg>
            <svg className={styles.starIcon} width="16" height="16">
              <use xlinkHref={`${sprite}#star`} />
            </svg>
            <svg className={styles.starIcon} width="16" height="16">
              <use xlinkHref={`${sprite}#star`} />
            </svg>
            <svg className={styles.starIcon} width="16" height="16">
              <use xlinkHref={`${sprite}#star`} />
            </svg>
          </div>
        </div>
        <div className="description">{comment}</div>
      </div>
    </div>
  );
};
