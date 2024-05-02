import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { CampersList } from '../../components/CampersList/CampersList';
import { CampersFilter } from '../../components/CampersFilter/CampersFilter';
import { useApplyFilters } from '../../hooks/useApplayFilters';
import { fetchCampers } from '../../store/operations';

import styles from './Catalog.module.css';

const Catalog = () => {
  const dispatch = useDispatch();
  const campersToShow = useApplyFilters();

  useEffect(() => {
    dispatch(fetchCampers(1));
  }, [dispatch]);

  return (
    <>
      <h1>Catalog</h1>
      <div className={styles.contentContainer}>
        <div className={styles.filter}>
          <CampersFilter />
        </div>
        <div className={styles.catalog}>
          <CampersList campers={campersToShow} />
        </div>
      </div>
    </>
  );
};

export default Catalog;
