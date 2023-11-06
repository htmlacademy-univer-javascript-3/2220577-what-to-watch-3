import { useAppDispatch } from '../hooks';
import {changeGenre} from '../redux/store/action';

type GenreProps = {
  name:string;
  isActive:string;
  setActive:React.Dispatch<React.SetStateAction<string>>;
}

export default function Genre({name, isActive, setActive}:GenreProps) {

  const dispatch = useAppDispatch();

  return (
    <li className={`catalog__genres-item ${isActive === name ? 'catalog__genres-item--active' : ''}`}>
      <div className='catalog__genres-link'
        onClick={() => {
          dispatch(changeGenre(name));
          setActive(name);
        }}
      >
        {name}
      </div>
    </li>
  );
}
