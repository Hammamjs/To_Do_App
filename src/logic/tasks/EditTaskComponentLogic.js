import '../../css/tasks/editTask.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from '../../app/Api/axios';
import { ToastContainer, toast } from 'react-toastify';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

export const EditTaskComponentLogic = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [updated, setUpdated] = useState(false);

  const token = useSelector((state) => state.auth.user.token);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';

  const handleGetTask = async () => {
    setUpdated(false);
    try {
      const res = await axios.get(`/tasks/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTitle(res.data.data.title);
      setDescription(res.data.data.description);
      setDate(res.data.data.date);
      setUpdated(true);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  useEffect(() => {
    handleGetTask();
  }, []);

  const handleEditTask = async (e) => {
    e.preventDefault();
    try {
      if (title && description && date) {
        await axios.put(`/tasks/${id}`, { title, date, description });
        setTitle('');
        setDate('');
        setDescription('');
        toast.success('Task updated sucessfully');

        setTimeout(() => {
          navigate(from, { replace: true });
        }, 2000);
      }
    } catch (err) {
      toast.error('Task not updated');
    }
  };

  return {
    ToastContainer,
    title,
    description,
    date,
    setTitle,
    updated,
    setDescription,
    setDate,
    setUpdated,
    handleGetTask,
    handleEditTask,
  };
};
