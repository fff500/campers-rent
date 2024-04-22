import { CamperCard } from '../CamperCard/CamperCard';

import styles from './CampersList.module.css';

export const CampersList = ({ campers }) => {
  return (
    <ul className={styles.campersList}>
      {campers.map((camper) => (
        <li key={camper._id}>
          <CamperCard camper={camper} />
        </li>
      ))}
    </ul>
  );
};
