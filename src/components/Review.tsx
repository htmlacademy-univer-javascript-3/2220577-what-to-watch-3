
type ReviewComponentProps = {
  comment: string;
  date: string;
  user: string;
  rating: number;
}

// {
//   id: 'ac8adb38-0cfa-312',
//   date: '2023-05-25T12:00:00.000Z',
//   user: 'Kate Muir',
//   comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed movies in years.',
//   rating: 8
// },

export default function Review({comment, date, user, rating}: ReviewComponentProps) {
  const strDate = new Date(date);
  const normalDate = strDate.toISOString().substring(0, 10);
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">
          {comment}
        </p>
        <footer className="review__details">
          <cite className="review__author">{user}</cite>
          <time className="review__date" dateTime={normalDate}>
            {normalDate}
          </time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating}</div>
    </div>
  );
}
