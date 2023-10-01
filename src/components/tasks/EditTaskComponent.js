import { EditTaskComponentLogic } from '../../logic/tasks/EditTaskComponentLogic';
const EditTaskComponent = () => {
  const {
    ToastContainer,
    date,
    description,
    handleEditTask,
    setDate,
    setDescription,
    setTitle,
    title,
    updated,
  } = EditTaskComponentLogic();
  return updated ? (
    <div className="edit-task">
      <form onSubmit={(e) => handleEditTask(e)}>
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
            Edit Task
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  ) : (
    <h3>Loading...</h3>
  );
};

export default EditTaskComponent;
