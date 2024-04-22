import { useSelector } from 'react-redux';
import { getFavorites } from '../../store/selectors';
import { CampersList } from '../../components/CampersList/CampersList';

const Favorites = () => {
  const favorites = useSelector(getFavorites);

  return (
    <>
      <h1>Favorites</h1>
      {!!favorites.length && (
        <CampersList campers={favorites} favorites={favorites} />
      )}
      {!favorites.length &&
        "It's empty here. Please, add some camper to favorites first."}
    </>
  );
};

export default Favorites;
