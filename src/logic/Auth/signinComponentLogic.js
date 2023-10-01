import { useNavigate, useLocation } from 'react-router-dom';
import '../../css/Auth/signin.css';
import { useEffect, useRef, useState } from 'react';
import axios from '../../app/Api/axios';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import {
  loginFailed,
  loginStart,
  loginSuccess,
  isLoading,
} from '../../app/features/AuthSlice';
export const SigninComponentLogic = () => {
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const LOGIN_URL = '/auth/login';

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const emailRef = useRef();

  useEffect(() => {
    emailRef.current.focus();
  }, [email]);

  const handleOnsubmit = (e) => {
    e.preventDefault();
    if (email && pwd) {
      dispatch(loginStart());
      axios
        .post(LOGIN_URL, JSON.stringify({ email, password: pwd }), {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        })
        .then((res) => {
          dispatch(loginSuccess(res.data));
          toast.success("You've Signedin");
          localStorage.setItem('userInfo', JSON.stringify(res.data));
          setTimeout(() => {
            navigate(from, { replace: true });
          }, 3000);
        })
        .catch((err) => {
          dispatch(loginFailed());
          toast.error('Signin failed please try again');
        });
    }
  };
  return {
    loading,
    pwd,
    setEmail,
    setPwd,
    email,
    handleOnsubmit,
    emailRef,
    ToastContainer,
  };
};
