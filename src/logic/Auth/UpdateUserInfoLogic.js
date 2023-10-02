import { useSelector } from 'react-redux';
import { selectUser, updateUserData } from '../../app/features/AuthSlice';
import '../../css/Auth/updateUserInfo.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import axios from '../../app/Api/axios';

export const UpdateUserInfoLogic = () => {
  const dispatch = useDispatch();

  const userInfo = useSelector(selectUser);
  const user = userInfo.data;

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [loading, setLoading] = useState(false);

  const updateInfo = async (e) => {
    e.preventDefault();

    setLoading(true);
    if (newPassword && passwordConfirm && password) {
      if (newPassword !== passwordConfirm) {
        return toast.error('Passwords not matched ');
      } else {
        axios
          .put(`users/${user._id}/changePassword`, {
            password,
            newPassword,
            passwordConfirm,
          })
          .then((res) => {
            toast.success(res.data.message);
          })
          .catch((err) => {
            if (err.response.status === 404)
              toast.error(err.response.data.errors[0].msg);
          });
        setPassword('');
        setPasswordConfirm('');
        setNewPassword('');
      }
    } else if (name.trim() !== '' && email.trim() !== '') {
      axios
        .put(`users/${user._id}`, { name, email })
        .then((res) => {
          dispatch(updateUserData(res.data.data));
          toast.success(res.data.message);
        })
        .catch((err) => {
          toast.error('Data not updated');
        });
    }
    setLoading(false);
  };
  return {
    name,
    email,
    setName,
    setEmail,
    setPassword,
    setNewPassword,
    setPasswordConfirm,
    ToastContainer,
    updateInfo,
    loading,
  };
};
