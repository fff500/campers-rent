import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CampersList } from '../../components/CampersList/CampersList';
import { Button } from '../../components/ui-kit/Button/Button';
import { fetchCampers } from '../../store/operations';
import { getShowLoadMoreButton, getPage } from '../../store/selectors';

import styles from './Catalog.module.css';

const Catalog = () => {
  const dispatch = useDispatch();
  const page = useSelector(getPage);
  const showLoadMoreButton = useSelector(getShowLoadMoreButton);

  useEffect(() => {
    dispatch(fetchCampers(page));
  }, [dispatch]);

  return (
    <>
      <h1>Catalog</h1>
      <CampersList />
      {showLoadMoreButton && (
        <Button
          className={styles.loadMoreButton}
          variant="transparent"
          onClick={() => dispatch(fetchCampers(page))}
        >
          Load more
        </Button>
      )}
    </>
  );
};

export default Catalog;
