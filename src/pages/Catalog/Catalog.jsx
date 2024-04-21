import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CamperCard } from '../../components/CamperCard/CamperCard';
import { Button } from '../../components/ui-kit/Button/Button';
import { getCampers } from '../../store/selectors';
import { fetchCampers } from '../../store/operations';

import styles from './Catalog.module.css';

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);
  const campers = useSelector(getCampers);

  console.log(campers);

  return (
    <>
      <h1>Catalog</h1>
      <ul className={styles.cardsList}>
        <li>
          <CamperCard />
        </li>
      </ul>
      <Button variant="transparent">Load more</Button>
    </>
  );
};

export default Catalog;
