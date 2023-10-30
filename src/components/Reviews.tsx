import { ReviewProps } from '../types';
import Review from './Review';

type ReviewTabProps = {
  active: boolean;
  reviews: ReviewProps[];
}

export default function Reviews({active, reviews}: ReviewTabProps) {
  return (
    <div>
      {
        active &&
      <div className="film-card__reviews film-card__row">
        <div className="film-card__reviews-col">
          {reviews.map((review) => (<Review key={review.id} date={review.date} user={review.user} comment={review.comment} rating={review.rating}/>))}
        </div>
        <div className="film-card__reviews-col">
          {reviews.map((review) => (<Review key={review.id} date={review.date} user={review.user} comment={review.comment} rating={review.rating}/>))}
        </div>
      </div>
      }
    </div>
  );
}
