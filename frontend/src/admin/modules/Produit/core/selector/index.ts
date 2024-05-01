import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'admin/apps/store';
import produitSlice from '../reducers';

export const selectedProduit = (state: RootState) => state.produit.produit;
export const selectEventsStatus = (state: RootState) => state.events.status;
export const selectEventsError = (state: RootState) => state.events.error;
export const selectDeleteEventStatus = (state: RootState) => state.events.statusDelete;
export const selectUpdateEventStatus = (state: RootState) => state.events.statusUpdate;
export const selectAddEventStatus = (state: RootState) => state.events.statusAdd;
export const selectSelectedEvent = (state: RootState) => state.events.selectedEvent;

export const selectAllEventsState = createSelector(
  [
    selectedProduit,
    selectEventsStatus,
    selectEventsError,
    selectDeleteEventStatus,
    selectUpdateEventStatus,
    selectAddEventStatus,
    selectSelectedEvent
  ],
  (produit, status, error, statusDelete, statusUpdate, statusAdd, selectedProduit) => ({
    produit,
    status,
    error,
    statusDelete,
    statusUpdate,
    statusAdd,
    selectedProduit
  })
);
