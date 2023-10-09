import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

type HeroCardProps = {
  title:string;
  year:number;
  genre:string;
}
const heroProps: HeroCardProps = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};


root.render(
  <React.StrictMode>
    <App genre={heroProps.genre} title={heroProps.title} year={heroProps.year}/>
  </React.StrictMode>
);
