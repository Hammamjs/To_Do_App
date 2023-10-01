import { TasksComponentLogic } from '../../logic/tasks/TasksComponentLogic';

const Tasks = () => {
  const { ToastContainer, changeTaskStatus, handleDeleteTask, tasks, Link } =
    TasksComponentLogic();

  return tasks ? (
    <div className={`tasks ${tasks.length >= 5 ? 'scroll' : ''}`}>
      <ul className="list">
        {tasks.length ? (
          tasks.map((task) => {
            return (
              <li
                key={task._id}
                className="flex items-center p-4 justify-between"
              >
                <div className="check-box title flex items-center relative">
                  <div
                    className={`status relative ${
                      task.status === 'ongoing'
                        ? 'ongoing'
                        : task.status === 'complete'
                        ? 'complete'
                        : 'incomplete'
                    }`}
                  ></div>
                  <div className="text-white">
                    <Link to={`taskDetails/${task._id}`}>
                      <h5>
                        {task.title.length >= 10
                          ? task.title.substr(0, 10) + '...'
                          : task.title}
                      </h5>
                    </Link>
                    <span className="block text-gray-400 m-0 text-start ms-1">
                      {task.date}
                    </span>
                  </div>
                </div>
                <div className="icon-holder flex items-center ">
                  <button
                    onClick={() => handleDeleteTask(task._id)}
                    className="text-red-400"
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                  <Link to={`/editTask/${task._id}`}>
                    <button className="text-sky-400">
                      <i className="fa fa-pen"></i>
                    </button>
                  </Link>
                </div>
                <div className="icons">
                  <ul className="status-radio flex">
                    <li
                      className={
                        task.status === 'incomplete' ? 'incomplete' : ''
                      }
                    ></li>
                    <li
                      onClick={() => changeTaskStatus('ongoing', task._id)}
                      className={task.status === 'ongoing' ? 'ongoing' : ''}
                    ></li>
                    <li
                      onClick={() => changeTaskStatus('complete', task._id)}
                      className={task.status === 'complete' ? 'complete' : ''}
                    ></li>
                  </ul>
                </div>
              </li>
            );
          })
        ) : (
          <h4 className="text-gray-400 flex justify-center h-60 font-bold items-center">
            There is no data to show
          </h4>
        )}
      </ul>
      <ToastContainer />
    </div>
  ) : (
    <h3>Loading ...</h3>
  );
};

export default Tasks;
