import { Link } from 'react-router-dom';

const AddTaskButton = () => {
  return (
    <div className="add-task-button bg-slate-600 text-end p-3">
      <Link to="/addTask">
        <button className="bg-blue-300 rounded p-1 me-1 text-white">
          Add Task
        </button>
      </Link>
    </div>
  );
};

export default AddTaskButton;
