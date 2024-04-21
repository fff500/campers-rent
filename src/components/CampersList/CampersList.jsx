import { useSelector } from 'react-redux';

import { CamperCard } from '../CamperCard/CamperCard';
import { getCampers } from '../../store/selectors';

import styles from './CampersList.module.css';

export const CampersList = () => {
  const campers = useSelector(getCampers);

  return (
    <ul className={styles.campersList}>
      {campers.map((camper) => (
        <li>
          <CamperCard camper={camper} />
        </li>
      ))}
    </ul>
  );
};
