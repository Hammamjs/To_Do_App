import '../../css/tasks/taskDetails.css';
import { TaskDetailComponentLogic } from '../../logic/tasks/TaskDetailComponentLogic';
const TaskDetails = () => {
  const { ToastContainer, task } = TaskDetailComponentLogic();

  return (
    <div className="task-details text-start text-white p-2 bg-slate-600">
      {task ? (
        <div className="task">
          <div className="info flex items-center justify-between">
            <div className="title">
              <p className="inline-block">Title: </p>
              <p className="inline-block mx-1"> {task.title}</p>
            </div>
            <div className="date text-gray-400">
              <p>Date: {task.date}</p>
            </div>
          </div>
          <div className="description my-2">
            <p>Description: </p>
            <p>{task.description}</p>
          </div>
        </div>
      ) : (
        <h4>Loading...</h4>
      )}
      <ToastContainer />
    </div>
  );
};

export default TaskDetails;
