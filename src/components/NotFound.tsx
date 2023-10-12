import { Link } from 'react-router-dom';

export default function NotFound(): JSX.Element {
  return (
    <>
      <h1>
      404.
        <br />
        <small>Page not found</small>
      </h1>
      <Link to="/">Go to main page</Link>
    </>
  );
}
