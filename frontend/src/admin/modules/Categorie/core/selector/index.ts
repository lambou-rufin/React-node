import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'admin/apps/store';
import eventsSlice from '../reducers';

export const selectEvents = (state: RootState) => state.events.events;
export const selectEventsStatus = (state: RootState) => state.events.status;
export const selectEventsError = (state: RootState) => state.events.error;
export const selectDeleteEventStatus = (state: RootState) => state.events.statusDelete;
export const selectUpdateEventStatus = (state: RootState) => state.events.statusUpdate;
export const selectAddEventStatus = (state: RootState) => state.events.statusAdd;
export const selectSelectedEvent = (state: RootState) => state.events.selectedEvent;

export const selectAllEventsState = createSelector(
  [
    selectEvents,
    selectEventsStatus,
    selectEventsError,
    selectDeleteEventStatus,
    selectUpdateEventStatus,
    selectAddEventStatus,
    selectSelectedEvent
  ],
  (events, status, error, statusDelete, statusUpdate, statusAdd, selectedEvent) => ({
    events,
    status,
    error,
    statusDelete,
    statusUpdate,
    statusAdd,
    selectedEvent
  })
);
