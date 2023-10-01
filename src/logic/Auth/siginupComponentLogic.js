import {
  signupStart,
  signupFailed,
  signupSuccess,
  isLoading,
} from '../../app/features/AuthSlice';

import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import { useLocation, useNavigate } from 'react-router-dom';
import '../../css/Auth/signup.css';
import { useRef, useState } from 'react';
import axios from '../../app/Api/axios';

export const SiginupComponentLogic = () => {
  const userNameRef = useRef('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const loading = useSelector(isLoading);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathename || '/';

  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return toast.error('Password and passwordConfirm not matched');
    }
    if (name && email && password && passwordConfirm) {
      dispatch(signupStart());
      try {
        const res = await axios.post(
          '/auth/signup',
          JSON.stringify({ name, email, password, passwordConfirm }),
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          }
        );
        if (res.status === 201) toast.success('Account created');
        dispatch(signupSuccess(res.data));
        localStorage.setItem('userInfo', JSON.stringify(res.data));
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 2000);
      } catch (err) {
        if (err.response.status === 404) toast.error('Password is too short');
        if (err.response.status === 500) toast.error('Account not created');
        dispatch(signupFailed());
      }
    }
  };
  return {
    userNameRef,
    passwordConfirm,
    onSubmit,
    ToastContainer,
    name,
    email,
    password,
    loading,
    setName,
    setEmail,
    setPassword,
    setPasswordConfirm,
  };
};
