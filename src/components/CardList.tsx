import Card from './Card';
import { CardListProps } from '../types';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CardList({smallFilmCards, genre}: CardListProps) {
  const params = useParams();
  const id = params.id && parseInt(params.id, 10);
  const [, setActiveCard] = useState(-1);
  return (
    genre !== undefined ? (
      <div className="catalog__films-list">
        {smallFilmCards.filter((filmCard) => filmCard.genre === genre && filmCard.id !== id).map((filmCard) =>
          (
            <article className="small-film-card catalog__films-card" key={filmCard.id} onMouseEnter={() => {
              setActiveCard(filmCard.id);
            }}
            >
              <Card id={filmCard.id} name={filmCard.name} previewImage={filmCard.previewImage} />
            </article>
          )
        )}
      </div>
    ) : (
      <div className="catalog__films-list">
        {smallFilmCards.map((filmCard) =>
          (
            <article className="small-film-card catalog__films-card" key={filmCard.id} onMouseEnter={() => {
              setActiveCard(filmCard.id);
            }}
            >
              <Card id={filmCard.id} name={filmCard.name} previewImage={filmCard.previewImage} />
            </article>
          )
        )}
      </div>
    )
  );
}
