import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import { AuthorizationStatus } from '../consts';
import Logout from './Logout';
import Login from './Login';

export default function Profile() {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const isAuth = authStatus === AuthorizationStatus.Auth;
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={'/mylist'} style={{ textDecoration: 'none' }}><img src="img/avatar.jpg" alt="User avatar" width={63} height={63} /></Link>
        </div>
      </li>
      <li className="user-block__item">
        {isAuth ? <Logout/> : <Login/>}
      </li>
    </ul>
  );
}
