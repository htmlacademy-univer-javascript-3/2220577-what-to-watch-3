import VideoPlayer from './VideoPlayer';
import { VIDEO_MOCK } from '../mocks/films';

type CardProps = {
  id: number;
  previewImage:string;
  name:string;
}

export default function Card({id, previewImage, name}: CardProps) {
  const [width,height] = [280,175];
  return (
    <VideoPlayer src={VIDEO_MOCK} id={id} width={width} height={height} poster={previewImage} name={name}/>
  );
}

