import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { getCamperReviews } from '../../store/selectors';
import { ReviewItem } from '../ReviewItem/ReviewItem';

export const ReviewsBlock = () => {
  const { camperId } = useParams();
  const camperReviews = useSelector(getCamperReviews(camperId));

  console.log(camperReviews);

  return (
    <ul>
      {camperReviews.map((review, index) => (
        <ReviewItem review={review} key={`${index}_${review.reviewer_name}`} />
      ))}
    </ul>
  );
};
