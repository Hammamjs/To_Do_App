import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../app/Api/axios';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';

export const TaskDetailComponentLogic = () => {
  const token = useSelector((state) => state.auth.user.token);
  const { id } = useParams();
  const [task, setTask] = useState('');

  const getTask = async () => {
    try {
      const res = await axios.get(`/tasks/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTask(res.data.data);
    } catch (err) {
      toast.error('Data not found for some reason');
    }
  };

  useEffect(() => {
    getTask();
  }, []);

  return {
    task,
    ToastContainer,
  };
};
