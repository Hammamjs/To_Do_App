import { useSelector } from 'react-redux';

import '../../css/tasks/addTask.css';
import { useEffect, useRef, useState } from 'react';
import axios from '../../app/Api/axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const AddTaskComponentLogic = () => {
  const titleRef = useRef();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  const token = useSelector((state) => state.auth.user.token);

  const handleAddTask = async (e) => {
    e.preventDefault();
    try {
      if (title && description && date) {
        await axios.post(
          '/tasks',
          { title, date, description },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTitle('');
        setDate('');
        setDescription('');
        toast.success('Task Added sucessfully');
        setTimeout(() => {
          navigate('/');
        }, 2500);
      }
    } catch (err) {
      toast.error('Task not added');
    }
  };

  return {
    titleRef,
    title,
    setTitle,
    setDate,
    setDescription,
    description,
    date,
    ToastContainer,
    handleAddTask,
  };
};
