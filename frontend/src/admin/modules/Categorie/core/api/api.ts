import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICategory } from '../models';
import { baseWithFormData } from '../../../../../api/api';

export const fetchCategory = createAsyncThunk<ICategory[]>('category/fetchCategory', async () => {
  try {
    const response = await baseWithFormData.get<any>(`/api/category/paginated?per_page=50&page=1`);
    return response.data.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des catégories :', error);
    throw error;
  }
});

export const addCategory = createAsyncThunk<ICategory, ICategory>('category/addCategory', async (category) => {
  try {
    const response = await baseWithFormData.post<ICategory>(`/api/category`, category);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'ajout de la catégorie :', error);
    throw error;
  }
});

export const updateCategory = createAsyncThunk<ICategory, ICategory>('category/updateCategory', async (category) => {
  try {
    const response = await baseWithFormData.post<ICategory>(`/api/category/${category.id}`, category);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la mise à jour de la catégorie :', error);
    throw error;
  }
});

export const deleteCategory = createAsyncThunk<void, number>('category/deleteCategory', async (id) => {
  try {
    await baseWithFormData.delete(`/api/category/${id}`);
  } catch (error) {
    console.error('Erreur lors de la suppression de la catégorie :', error);
    throw error;
  }
});
