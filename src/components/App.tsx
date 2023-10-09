import Main from '../pages/main/Main';

type HeroCardProps = {
  title:string;
  year:number;
  genre:string;
}

export default function App({genre, title, year}:HeroCardProps) {
  return (
    <Main genre={genre} title={title} year={year}/>
  );
}
