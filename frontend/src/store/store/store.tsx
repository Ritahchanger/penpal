import { configureStore } from '@reduxjs/toolkit';
import sidebarSlice from '../features/sidebarSice';

import moreDescriptionSlice from '../features/ModalSlice';


export const store = configureStore({
  reducer: {
    sidebar:sidebarSlice.reducer,
    moreDescription:moreDescriptionSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
