import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Job {
  id?: string;
  client?: string;
  paperDetails?: string;
  deadline?: string;
  charges?: number;
  files?: string[];
  description?:string
}

interface ModalState {
  isOpen: boolean;
  job: Job | null;
}

const initialState: ModalState = {
  isOpen: false,
  job: null,
};

const moreDescriptionSlice = createSlice({
  name: "moreDescription",
  initialState,
  reducers: {
    openJobDescriptionModal(state, action: PayloadAction<Job>) {
      state.isOpen = true;
      state.job = action.payload;
    },
    closeModal(state) {
      state.isOpen = false;
      state.job = null;
    },
  },
});

export const { openJobDescriptionModal, closeModal } = moreDescriptionSlice.actions;

export default moreDescriptionSlice;
