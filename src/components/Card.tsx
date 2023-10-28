import { Link } from 'react-router-dom';
import { CardProps } from '../types';
import VideoPlayer from './VideoPlayer';
import { useRef, useState } from 'react';
import { VIDEO_MOCK } from '../mocks/films';

export default function Card({id, previewImage, name}: CardProps) {
  const [width,height] = [280,175];
  const [isPlaying, setIsPlaying] = useState(false);
  const timerRef: { current: NodeJS.Timeout | null } = useRef(null);

  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => {
      setIsPlaying(true);
    }, 1000);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setIsPlaying(false);
  };
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{isPlaying ? (
      <VideoPlayer src={VIDEO_MOCK} id={id} width={width} height={height}/>
    ) : (
      <Link className="small-film-card__link" to={`/films/${id}`}>
        <div className="small-film-card__image">
          <img
            src={previewImage}
            alt={name}
            width={width}
            height={height}
          />
        </div>
        <h3 className="small-film-card__title">
          {name}
        </h3>
      </Link>
    )}
    </div>
  );
}

