import { createSlice } from '@reduxjs/toolkit';
import { addProduit, deleteProduit, fetchProduits, updateProduit } from '../api/api';
import { IProduit } from '../models';
import { EStatus } from 'admin/shared/inteface/enum';

const produitSlice = createSlice({
  name: 'produit',
  initialState: {
    produit: [] as IProduit[],
    selectedProduitt: {} as IProduit,
    status: EStatus.IDLE,
    statusAdd: EStatus.IDLE,
    statusDelete: EStatus.IDLE,
    statusUpdate: EStatus.IDLE,
    error: null as string | null
  },
  reducers: {
    setSelectedProduit: (state, action) => {
      state.selectedProduit = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      //GET
      .addCase(fetchProduits.pending, (state) => {
        state.status = EStatus.LOADING;
      })
      .addCase(fetchProduits.fulfilled, (state, action) => {
        state.status = EStatus.SUCCESS;
        state.events = action.payload;
      })
      .addCase(fetchProduits.rejected, (state, action) => {
        state.status = EStatus.FAILED;
        state.error = action.error.message ?? 'Unknown error';
      })
      //DELETE
      .addCase(deleteProduit.pending, (state) => {
        state.statusDelete = EStatus.LOADING;
        state.error = null;
      })
      .addCase(deleteProduit.fulfilled, (state, action) => {
        state.statusDelete = EStatus.SUCCESS;
        const eventId = action.meta.arg;
        state.events = state.events.filter((event) => event.id !== eventId);
      })
      .addCase(deleteProduit.rejected, (state, action) => {
        state.statusDelete = EStatus.FAILED;
        state.error = action.error.message ?? 'Unknown error';
      })
      //UPDATE
      .addCase(updateProduit.pending, (state) => {
        state.statusUpdate = EStatus.LOADING;
        state.error = null;
      })
      .addCase(updateProduit.fulfilled, (state, action) => {
        state.statusUpdate = EStatus.SUCCESS;
        const updatedEvent = action.payload;
        const index = state.events.findIndex((event) => event.id === updatedEvent.id);
        if (index !== -1) {
          state.events[index] = updatedEvent;
        }
      })
      .addCase(updateProduit.rejected, (state, action) => {
        state.statusUpdate = EStatus.FAILED;
        state.error = action.error.message ?? 'Unknown error';
      })
      //ADD
      .addCase(addProduit.pending, (state) => {
        state.statusAdd = EStatus.LOADING;
        state.error = null;
      })
      .addCase(addProduit.fulfilled, (state, action) => {
        state.statusAdd = EStatus.SUCCESS;
        state.events.push(action.payload);
        state.selectedProduit = action.payload;
      })
      .addCase(addProduit.rejected, (state, action) => {
        state.statusAdd = EStatus.FAILED;
        state.error = action.error.message ?? 'Unknown error';
      });
  }
});
export const { setSelectedProduit } = produitSlice.actions;

export default produitSlice.reducer;
