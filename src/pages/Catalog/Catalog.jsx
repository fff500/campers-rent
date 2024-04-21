import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { CampersList } from '../../components/CampersList/CampersList';
import { Button } from '../../components/ui-kit/Button/Button';
import { fetchCampers } from '../../store/operations';

import styles from './Catalog.module.css';

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <>
      <h1>Catalog</h1>
      <CampersList />
      <Button variant="transparent">Load more</Button>
    </>
  );
};

export default Catalog;
