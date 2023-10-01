import '../../css/global/sidebar.css';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../../app/features/AuthSlice';
import { useSelector } from 'react-redux';

export const SideBarLogic = () => {
  const Authenticated = useSelector(isAuthenticated);

  return {
    Authenticated,
    Link,
  };
};
