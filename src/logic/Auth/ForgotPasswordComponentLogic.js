import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from '../../app/Api/axios';

export const ForgotPasswordComponentLogic = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleForgotPass = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('/auth/forgotPassword', { email });
      if (res.status === 200) {
        toast.success('Reset code sent check your inbox');
        setTimeout(() => {
          navigate('/verifyPassResetCode');
        }, 5000);
      }
    } catch (err) {
      toast.error('Reset code not sent');
    }
    setLoading(false);
  };
  return {
    ToastContainer,
    setEmail,
    loading,
    handleForgotPass,
  };
};
