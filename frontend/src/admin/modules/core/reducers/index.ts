import { createSlice } from '@reduxjs/toolkit';
import { OperationStatus } from 'admin/shared/inteface/enum';
import { toast } from 'react-toastify';
import { fetchUsers, fetchProducts, fetchCategories, fetchBills } from '../api/api';

const initialState = {
  users: [],
  products: [],
  categories: [],
  bills: [],
  status: OperationStatus.IDLE,
  error: null,
};

const entitySlice = createSlice({
  name: 'entities',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setBills: (state, action) => {
      state.bills = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = OperationStatus.LOADING;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = OperationStatus.SUCCESS;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = OperationStatus.FAILED;
        state.error = action.error.message ?? 'Unknown error';
      })
      .addCase(fetchProducts.pending, (state) => {
        state.status = OperationStatus.LOADING;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = OperationStatus.SUCCESS;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = OperationStatus.FAILED;
        state.error = action.error.message ?? 'Unknown error';
      })
      .addCase(fetchCategories.pending, (state) => {
        state.status = OperationStatus.LOADING;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = OperationStatus.SUCCESS;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = OperationStatus.FAILED;
        state.error = action.error.message ?? 'Unknown error';
      })
      .addCase(fetchBills.pending, (state) => {
        state.status = OperationStatus.LOADING;
        state.error = null;
      })
      .addCase(fetchBills.fulfilled, (state, action) => {
        state.status = OperationStatus.SUCCESS;
        state.bills = action.payload;
      })
      .addCase(fetchBills.rejected, (state, action) => {
        state.status = OperationStatus.FAILED;
        state.error = action.error.message ?? 'Unknown error';
      });
  },
});

export const { setUsers, setProducts, setCategories, setBills } = entitySlice.actions;

export default entitySlice.reducer;
