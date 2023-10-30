import { ReviewProps } from '../types';

{/* <div className="review">
            <blockquote className="review__quote">
              <p className="review__text">
                The mannered, madcap proceedings are often delightful, occasionally
                silly, and here and there, gruesome and/or heartbreaking.
              </p>
              <footer className="review__details">
                <cite className="review__author">Matthew Lickona</cite>
                <time className="review__date" dateTime="2016-12-20">
                  December 20, 2016
                </time>
              </footer>
            </blockquote>
            <div className="review__rating">7,2</div>
          </div>
          <div className="review">
            <blockquote className="review__quote">
              <p className="review__text">
                It is certainly a magical and childlike way of storytelling, even if
                the content is a little more adult.
              </p>
              <footer className="review__details">
                <cite className="review__author">Paula Fleri-Soler</cite>
                <time className="review__date" dateTime="2016-12-20">
                  December 20, 2016
                </time>
              </footer>
            </blockquote>
            <div className="review__rating">7,6</div>
          </div>
          <div className="review"> */}

export const reviews:ReviewProps[] = [
  {
    id: 'ac8adb38-0cfa-312',
    date: '2023-05-25T12:00:00.000Z',
    user: 'Kate Muir',
    comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed movies in years.',
    rating: 8
  },
  {
    id: 'ac8adb38-0cfa-5123',
    date: '2023-05-25T12:00:00.000Z',
    user: 'Matthew Lickona',
    comment: 'The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.',
    rating: 7.2
  },
  {
    id: 'ac8adb38-0cfa-11',
    date: '2023-05-25T12:00:00.000Z',
    user: 'Paula Fleri-Soler',
    comment: 'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.',
    rating: 7.6
  },
];
