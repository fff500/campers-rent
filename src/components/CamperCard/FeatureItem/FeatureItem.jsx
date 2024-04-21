import sprite from '../../../images/icons/sprite.svg';

import styles from './FeatureItem.module.css';

export const FeatureItem = ({ iconId, title }) => {
  return (
    <div className={styles.feature}>
      <svg className={styles.featureIcon} width="20" height="20">
        <use xlinkHref={`${sprite}#${iconId}`} />
      </svg>
      <span>{title}</span>
    </div>
  );
};
