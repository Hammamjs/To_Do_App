import '../../css/tasks/Tasks.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from '../../app/Api/axios';
import {
  deleteTask,
  getTasks,
  changeStatus,
} from '../../app/features/TasksSlice';
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';

export const TasksComponentLogic = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.user.token);
  const userId = useSelector((state) => state.auth.user.data._id);

  useEffect(() => {
    const getAllTasks = async () => {
      try {
        const res = await axios.get(`/users/${userId}/tasks`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const tasks = res.data;
        dispatch(getTasks(tasks.data));
      } catch (err) {
        toast(err.message);
      }
    };
    if (token) {
      getAllTasks();
    }
  }, [token]);
  let tasks = useSelector((state) => state.tasks.tasks);

  const handleDeleteTask = async (id) => {
    dispatch(deleteTask(id));
    try {
      await axios.delete(`/tasks/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success('Task deleted successfuly');
    } catch (err) {
      toast.error(err.message);
    }
  };

  const changeTaskStatus = async (status, id) => {
    try {
      if (status === 'ongoing') {
        await axios
          .put(
            `/tasks/${id}/status/ongoing`,
            {},
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )
          .then((res) => {
            dispatch(changeStatus({ id, data: res.data }));
            toast.success('Good progress keep going!');
          });
      } else if (status === 'complete') {
        await axios
          .put(
            `/tasks/${id}/status/complete`,
            {},
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )
          .then((res) => {
            dispatch(changeStatus({ id, data: res.data }));
            toast.success('Good Task completed!');
          });
      }
    } catch (err) {
      toast(err.message);
    }
  };

  return {
    tasks,
    handleDeleteTask,
    changeTaskStatus,
    ToastContainer,
    Link,
  };
};
