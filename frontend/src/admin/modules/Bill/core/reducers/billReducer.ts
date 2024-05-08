import { createSlice } from '@reduxjs/toolkit';
import { OperationStatus } from 'admin/shared/inteface/enum';
import { getBills, generateReport, getPdf, deleteBill } from '../api/api';

const initialState = {
  bills: [],
  status: OperationStatus.IDLE,
  error: null,
};

const billSlice = createSlice({
  name: 'bills',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBills.pending, (state) => {
        state.status = OperationStatus.LOADING;
        state.error = null;
      })
      .addCase(getBills.fulfilled, (state, action) => {
        state.status = OperationStatus.SUCCESS;
        state.bills = action.payload;
      })
      .addCase(getBills.rejected, (state, action) => {
        state.status = OperationStatus.FAILED;
        state.error = action.error.message ?? 'Unknown error';
      })
      .addCase(generateReport.pending, (state) => {
        state.status = OperationStatus.LOADING;
        state.error = null;
      })
      .addCase(generateReport.fulfilled, (state) => {
        state.status = OperationStatus.SUCCESS;
      })
      .addCase(generateReport.rejected, (state, action) => {
        state.status = OperationStatus.FAILED;
        state.error = action.error.message ?? 'Unknown error';
      })
      .addCase(getPdf.pending, (state) => {
        state.status = OperationStatus.LOADING;
        state.error = null;
      })
      .addCase(getPdf.fulfilled, (state) => {
        state.status = OperationStatus.SUCCESS;
      })
      .addCase(getPdf.rejected, (state, action) => {
        state.status = OperationStatus.FAILED;
        state.error = action.error.message ?? 'Unknown error';
      })
      .addCase(deleteBill.pending, (state) => {
        state.status = OperationStatus.LOADING;
        state.error = null;
      })
      .addCase(deleteBill.fulfilled, (state) => {
        state.status = OperationStatus.SUCCESS;
      })
      .addCase(deleteBill.rejected, (state, action) => {
        state.status = OperationStatus.FAILED;
        state.error = action.error.message ?? 'Unknown error';
      });
  },
});

export default billSlice.reducer;
