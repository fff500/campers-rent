import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../ui-kit/Button/Button';
import { CamperCard } from '../CamperCard/CamperCard';
import { getPage, getShowLoadMoreButton } from '../../store/selectors';
import { fetchCampers } from '../../store/operations';

import styles from './CampersList.module.css';

export const CampersList = ({ campers }) => {
  const dispatch = useDispatch();
  const showLoadMoreButton = useSelector(getShowLoadMoreButton);
  const page = useSelector(getPage);

  return (
    <>
      <ul className={styles.campersList}>
        {campers.map((camper) => (
          <li className={styles.camperItem} key={camper._id}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>
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
