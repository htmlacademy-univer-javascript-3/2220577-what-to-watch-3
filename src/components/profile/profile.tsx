import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../consts';
import Logout from '../logout/logout';
import Login from '../login/login';
import { getAuthStatus, getUserData } from '../../redux/store/user-process/user.selectors';

export default function Profile() {
  const authStatus = useAppSelector(getAuthStatus);
  const userData = useAppSelector(getUserData);
  const isAuth = authStatus === AuthorizationStatus.Auth;
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={'/mylist'} style={{ textDecoration: 'none' }}><img src={userData?.avatarUrl || 'img/avatar.jpg'} alt="User avatar" width={63} height={63} /></Link>
        </div>
      </li>
      <li className="user-block__item">
        {isAuth ? <Logout/> : <Login/>}
      </li>
    </ul>
  );
}
