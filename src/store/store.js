import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import AuthSlice from '../app/features/AuthSlice';
import TasksSlice from '../app/features/TasksSlice';

export const store = configureStore(
  {
    reducer: {
      auth: AuthSlice,
      tasks: TasksSlice,
    },
  },
  composeWithDevTools()
);
