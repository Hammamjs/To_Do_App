import axios from '../../app/Api/axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const VerifyPassResetCodeLogic = () => {
  const [resetCode, setResetCode] = useState('');

  const navigate = useNavigate();

  const handleVerifyPass = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/auth/verifyPassword', { resetCode });
      if (res.status === 200) {
        toast('Verified completed');
      }
      setTimeout(() => {
        navigate('/resetPassword', { replace: true });
      }, 4000);
    } catch (err) {
      toast('Invalid code or user not exist');
    }
  };

  return {
    ToastContainer,
    setResetCode,
    handleVerifyPass,
    resetCode,
  };
};
