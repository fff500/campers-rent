import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { getCamper } from '../../store/selectors';

export const FeaturesBlock = () => {
  const { camperId } = useParams();
  const camper = useSelector(getCamper(camperId));

  console.log(camper);

  return <div>FeaturesBlock</div>;
};
