import { createSlice } from '@reduxjs/toolkit';

const TasksSlice = createSlice({
  name: 'posts',
  initialState: { tasks: [] },
  reducers: {
    AddTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    getTasks: (state, action) => {
      state.tasks = action.payload;
      return state;
    },
    deleteTask: (state, action) => {
      const taskId = action.payload;
      state.tasks = state.tasks.filter((ts) => ts._id !== taskId);
    },
    changeStatus: (state, action) => {
      const taskId = action.payload.id;
      const index = state.tasks.find((task) => task._id === taskId);
      index.status = action.payload.data.task.status;
    },
  },
});

export const { getTasks, AddTask, deleteTask, changeStatus } =
  TasksSlice.actions;

export const getAllTasks = (state) => state.tasks.tasks;

export default TasksSlice.reducer;
