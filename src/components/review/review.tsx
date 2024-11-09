import { ReviewType } from "../../mocks/reviews";

interface SingleReviewProps {
  review: ReviewType;
}

export const SingleReview: React.FC<SingleReviewProps> = ({ review }) => {
  const reviewDate = new Date(review.date);
  const formattedDate = reviewDate.toLocaleString('en', { month: 'long', year: 'numeric' });
  
  return (
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img
          className="reviews__avatar user__avatar"
          src={review.user.avatarUrl}
          width={54}
          height={54}
          alt="User avatar"
        />
      </div>
      <span className="reviews__user-name">{review.user.name || 'Anonymous'}</span>

      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${review.rating * 20}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <p className="reviews__text">{review.comment}</p>

        <time className="reviews__time" dateTime={reviewDate.toISOString()}>
          {formattedDate}
        </time>
      </div>
    </div>
  );
};

export default SingleReview;
