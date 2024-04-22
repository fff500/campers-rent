import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CampersList } from '../../components/CampersList/CampersList';
import { Button } from '../../components/ui-kit/Button/Button';
import { fetchCampers } from '../../store/operations';
import {
  getCampers,
  getShowLoadMoreButton,
  getPage,
} from '../../store/selectors';

import styles from './Catalog.module.css';

const Catalog = () => {
  const dispatch = useDispatch();
  const campers = useSelector(getCampers);
  const page = useSelector(getPage);
  const showLoadMoreButton = useSelector(getShowLoadMoreButton);

  useEffect(() => {
    dispatch(fetchCampers(page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>Catalog</h1>
      <CampersList campers={campers} />
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
