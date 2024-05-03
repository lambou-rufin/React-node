import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICategory } from '../models';
import { baseWithFormData } from '../../../../../api/api';

export const fetchCategory = createAsyncThunk<ICategory[]>('category/fetchCategory', async () => {
  const response = await baseWithFormData.get<any>(`/api/category/paginated?per_page=50&page=1`);
  return response.data.data;
});

export const addCategory = createAsyncThunk<ICategory, ICategory>('category/addCategory', async (category) => {
  const response = await baseWithFormData.post<ICategory>(`/api/category`, category);
  return response.data;
});

export const updateCategory = createAsyncThunk<ICategory, ICategory>('category/updateCategory', async (category) => {
  const response = await baseWithFormData.post<ICategory>(`/api/category/${category.id}`, category);
  return response.data;
});

export const deleteCategory = createAsyncThunk<void, number>('category/deleteCategory', async (id) => {
  await baseWithFormData.delete(`/api/category/${id}`);
});
