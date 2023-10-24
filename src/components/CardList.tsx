import Card from './Card';
import { CardListProps } from '../types';
import { useState } from 'react';

export default function CardList({filmCards}: CardListProps) {

  const [, setActiveCard] = useState(-1);
  return (
    <div className="catalog__films-list">

      {filmCards.map((filmCard) => (
        <article className="small-film-card catalog__films-card" key={filmCard.id} onMouseEnter={() => {
          setActiveCard(filmCard.id);
        }}
        >
          <Card id={filmCard.id} name={filmCard.name} previewImage={filmCard.previewImage} />
        </article>
      )
      )}
    </div>
  );
}
