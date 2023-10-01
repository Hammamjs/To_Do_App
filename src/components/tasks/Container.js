import '../../css/tasks/Container.css';
import Tasks from './Tasks';
import AddTask from './AddTaskButton';
import { ToastContainer } from 'react-toastify';

const Container = () => {
  return (
    <div className="content my-4 bg-slate-700 m-auto">
      <h3 className="text-start p-3 text-white bold">Tasks List</h3>
      <div className="holder">
        <Tasks />
        <AddTask />
      </div>
      <ToastContainer limit={3} />
    </div>
  );
};

export default Container;
