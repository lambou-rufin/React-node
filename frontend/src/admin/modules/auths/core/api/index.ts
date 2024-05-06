import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from '../models';
import { baseWithFormData } from '../../../../../api/api';

// Action pour récupérer la liste des utilisateurs
export const fetchUsers = createAsyncThunk<IUser[]>('users/fetchUsers', async () => {
  const response =  await baseWithFormData.get<IUser[]>('users');
  return response.data;
});

// Action pour ajouter un utilisateur
export const createUser = createAsyncThunk<IUser, IUser>('users/createUser', async (user) => {
  const response = await baseWithFormData.post<IUser>('users', user);
  return response.data;
});

// Action pour mettre à jour un utilisateur
export const updateUser = createAsyncThunk<IUser, IUser>('users/updateUser', async (user) => {
  const response = await baseWithFormData.put<IUser>(`users/${user.id}`, user);
  return response.data;
});

// Action pour supprimer un utilisateur
export const deleteUser = createAsyncThunk<void, number>('users/deleteUser', async (id) => {
  await baseWithFormData.delete(`/api/users/${id}`);
});
