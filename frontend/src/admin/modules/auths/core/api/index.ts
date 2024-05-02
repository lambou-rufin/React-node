import { createAsyncThunk } from '@reduxjs/toolkit';
import api, { baseWithFormData } from 'api/api';
import { IUser } from '../models';

// Action pour récupérer la liste des utilisateurs
export const fetchUsers = createAsyncThunk<IUser[]>('users/fetchUsers', async () => {
  const response =  await baseWithFormData.get<IUser>(`users/fetchUsers`, user);
  return response.data;
});

// Action pour ajouter un utilisateur
export const addUser = createAsyncThunk<IUser, IUser>('users/addUser', async (user) => {
  const response = await baseWithFormData.post<IUser>(`users/fetchUsers`, user);
  return response.data;
});

// Action pour mettre à jour un utilisateur
export const updateUser = createAsyncThunk<IUser, IUser>('users/updateUser', async (user) => {
  const response = await baseWithFormData.post<IUser>(`users/fetchUsers`, user);
  return response.data;
});

// Action pour supprimer un utilisateur
export const deleteUser = createAsyncThunk<void, number>('users/deleteUser', async (userId) => {
  await baseWithFormData.delete(`/api/users/${userId}`);
});
