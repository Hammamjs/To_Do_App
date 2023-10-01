import { useSelector, useDispatch } from 'react-redux';
import { logout, isAuthenticated } from '../../app/features/AuthSlice';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const NavBarLogic = () => {
  const isUserAuthenticated = useSelector(isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.pathname || '/signin';

  const handleLogout = () => {
    dispatch(logout());
    navigate(from, { replace: true });
  };

  return {
    Link,
    isUserAuthenticated,
    handleLogout,
  };
};

export default NavBarLogic;
