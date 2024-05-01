import { createAsyncThunk } from '@reduxjs/toolkit';
import api, { baseWithFormData } from 'api/api';
import { ICategory } from '../models';

export const fetchCategory = createAsyncThunk<ICategory[]>('category/fetchCategory', async () => {
  const response = await api.get<any>(`/api/category/paginated?per_page=50&page=1`);
  return response.data.data;
});

export const addCategory = createAsyncThunk<ICategory, ICategory>('category/addCategory', async (category) => {
  const response = await baseWithFormData.post<ICategory>(`/api/category`, category);
  return response.data;
});

export const updateCategory = createAsyncThunk<ICategory, ICategory>('category/updateCategory', async (category) => {
  const response = await baseWithFormData.post<ICategory>(`/api/category/${category.id}`, event);
  return response.data;
});

export const deleteCategory = createAsyncThunk<void, number>('category/deleteCategory', async (categoryId) => {
  await api.delete(`/api/category/${categoryId}`);
});
