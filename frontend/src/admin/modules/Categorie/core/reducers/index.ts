import { createSlice } from '@reduxjs/toolkit';
import { addEvent, deleteEvent, fetchEvents, updateEvent } from '../api/api';
import { IEvent } from '../models';
import { EStatus } from 'admin/shared/inteface/enum';

const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    events: [] as IEvent[],
    selectedEvent: {} as IEvent,
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
      .addCase(fetchEvents.pending, (state) => {
        state.status = EStatus.LOADING;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.status = EStatus.SUCCESS;
        state.events = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.status = EStatus.FAILED;
        state.error = action.error.message ?? 'Unknown error';
      })
      //DELETE
      .addCase(deleteEvent.pending, (state) => {
        state.statusDelete = EStatus.LOADING;
        state.error = null;
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        state.statusDelete = EStatus.SUCCESS;
        const eventId = action.meta.arg;
        state.events = state.events.filter((event) => event.id !== eventId);
      })
      .addCase(deleteEvent.rejected, (state, action) => {
        state.statusDelete = EStatus.FAILED;
        state.error = action.error.message ?? 'Unknown error';
      })
      //UPDATE
      .addCase(updateEvent.pending, (state) => {
        state.statusUpdate = EStatus.LOADING;
        state.error = null;
      })
      .addCase(updateEvent.fulfilled, (state, action) => {
        state.statusUpdate = EStatus.SUCCESS;
        const updatedEvent = action.payload;
        const index = state.events.findIndex((event) => event.id === updatedEvent.id);
        if (index !== -1) {
          state.events[index] = updatedEvent;
        }
      })
      .addCase(updateEvent.rejected, (state, action) => {
        state.statusUpdate = EStatus.FAILED;
        state.error = action.error.message ?? 'Unknown error';
      })
      //ADD
      .addCase(addEvent.pending, (state) => {
        state.statusAdd = EStatus.LOADING;
        state.error = null;
      })
      .addCase(addEvent.fulfilled, (state, action) => {
        state.statusAdd = EStatus.SUCCESS;
        state.events.push(action.payload);
        state.selectedEvent = action.payload;
      })
      .addCase(addEvent.rejected, (state, action) => {
        state.statusAdd = EStatus.FAILED;
        state.error = action.error.message ?? 'Unknown error';
      });
  }
});
export const { setSelectedEvent } = eventsSlice.actions;

export default eventsSlice.reducer;
