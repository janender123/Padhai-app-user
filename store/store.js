import { configureStore } from '@reduxjs/toolkit';
import appSlice from 'store/appSlice';
import chatSlice from 'store/chatSlice';
import taskKanbanSlice from 'store/taskKanbanSlice';

export const store = configureStore({
  reducer: {
      app:appSlice,
      chat:chatSlice,
      kanban:taskKanbanSlice,
  },
})