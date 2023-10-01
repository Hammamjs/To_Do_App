import { AddTaskComponentLogic } from '../../logic/tasks/AddTaskComponentLogic';
const AddTaskComponent = () => {
  const {
    ToastContainer,
    date,
    description,
    handleAddTask,
    title,
    titleRef,
    setTitle,
    setDescription,
    setDate,
  } = AddTaskComponentLogic();
  return (
    <div className="add-task">
      <form onSubmit={(e) => handleAddTask(e)}>
        <div
          className="
          box
       bg-gray-500
        grid grid-cols-1 
        md:grid-cols-2 
        gap-1
        p-2
        "
        >
          <input
            type="text"
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
            ref={titleRef}
            value={title}
          />
          <input
            type="text"
            placeholder="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
          <textarea
            placeholder="description"
            className="col-span-2"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
          <button className="my-2 text-white bg-gradient-to-l from-red-300 to-black-500">
            Add Task
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddTaskComponent;
