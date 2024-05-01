import { createSlice } from '@reduxjs/toolkit';
import { addEvent, deleteEvent, fetchEvents, updateEvent } from '../api/api';
import { IEvent } from '../models';
import { EStatus } from 'admin/shared/inteface/enum';

const Category = createSlice({
  name: 'category',
  initialState: {
    category: [] as Icategory[],
    selectedEvent: {} as Icategory,
    status: EStatus.IDLE,
    statusAdd: EStatus.IDLE,
    statusDelete: EStatus.IDLE,
    statusUpdate: EStatus.IDLE,
    error: null as string | null
  },
  reducers: {
    setSelectedEvent: (state, action) => {
      state.selectedEvent = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      //GET
      .addCase(fetchCategory.pending, (state) => {
        state.status = EStatus.LOADING;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.status = EStatus.SUCCESS;
        state.events = action.payload;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.status = EStatus.FAILED;
        state.error = action.error.message ?? 'Unknown error';
      })
      //DELETE
      .addCase(deleteCategory.pending, (state) => {
        state.statusDelete = EStatus.LOADING;
        state.error = null;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.statusDelete = EStatus.SUCCESS;
        const id = action.meta.arg;
        state.events = state.category.filter((event) => event.id !== eventId);
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.statusDelete = EStatus.FAILED;
        state.error = action.error.message ?? 'Unknown error';
      })
      //UPDATE
      .addCase(updateCategory.pending, (state) => {
        state.statusUpdate = EStatus.LOADING;
        state.error = null;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.statusUpdate = EStatus.SUCCESS;
        const updatedCategory = action.payload;
        const index = state.category.findIndex((category) => event.id === updateCategory.id);
        if (index !== -1) {
          state.events[index] = updatedCategory;
        }
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.statusUpdate = EStatus.FAILED;
        state.error = action.error.message ?? 'Unknown error';
      })
      //ADD
      .addCase(addCategory.pending, (state) => {
        state.statusAdd = EStatus.LOADING;
        state.error = null;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.statusAdd = EStatus.SUCCESS;
        state.category.push(action.payload);
        state.selectedCategory = action.payload;
      })
      .addCase(addCategory.rejected, (state, action) => {
        state.statusAdd = EStatus.FAILED;
        state.error = action.error.message ?? 'Unknown error';
      });
  }
});
export const { setSelectedCategory } = categorySlice.actions;

export default categorySlice.reducer;
