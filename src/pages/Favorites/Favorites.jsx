import { useSelector } from 'react-redux';

import { CampersList } from '../../components/CampersList/CampersList';
import { getFavorites } from '../../store/selectors';

const Favorites = () => {
  const favorites = useSelector(getFavorites);

  return (
    <>
      <h1>Favorites</h1>
      {!!favorites.length && (
        <CampersList campers={favorites} showLoadMore={false} />
      )}
      {!favorites.length &&
        "It's empty here. Please, add some camper to favorites first."}
    </>
  );
};

export default Favorites;
