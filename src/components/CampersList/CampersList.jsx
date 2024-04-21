import { useSelector } from 'react-redux';

import { CamperCard } from '../CamperCard/CamperCard';
import { getCampers } from '../../store/selectors';

import styles from './CampersList.module.css';

export const CampersList = () => {
  const campers = useSelector(getCampers);

  console.log(campers);

  return (
    <ul className={styles.campersList}>
      <li>
        <CamperCard />
      </li>
    </ul>
  );
};
