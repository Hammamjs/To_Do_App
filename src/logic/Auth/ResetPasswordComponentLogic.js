import { toast, ToastContainer } from 'react-toastify';
import axios from '../../app/Api/axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../app/features/AuthSlice';
import { useNavigate } from 'react-router-dom';

export const ResetPasswordComponentLogic = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleResetPass = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.put(
        '/auth/resetPassword',
        { email, newPassword },
        { withCredentials: true }
      );
      if (res.status === 200) {
        toast.success('Password updated', { theme: 'dark' });
        dispatch(loginSuccess(res.data));
        localStorage.setItem('userInfo', JSON.stringify(res.data));
        setTimeout(() => {
          navigate('/', { replace: true });
        }, 3000);
      }
    } catch (err) {
      toast.error('Password not updated');
    }
    setLoading(false);
  };
  return {
    setEmail,
    setNewPassword,
    loading,
    handleResetPass,
    ToastContainer,
  };
};
