import { ReviewType } from "../../mocks/reviews";
import { SingleReview } from "../review/review";

interface ReviewListProps {
  offerReviews: ReviewType[];
}

export const ReviewList: React.FC<ReviewListProps> = ({ offerReviews }) => {
  return (
    <ul className="reviews__list">
      {offerReviews.map((review) => (
        <li key={review.id} className="reviews__item">
          <SingleReview review={review} />
        </li>
      ))}
    </ul>
  );
};

export default ReviewList;
