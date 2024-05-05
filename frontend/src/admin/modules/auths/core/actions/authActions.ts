// authActions.ts

import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseWithFormData } from '../../../../../api/api';
import { IUser } from '../models';

// Action pour l'inscription
export const signUp = createAsyncThunk('users/signUp', async () => {
    const response =  await baseWithFormData.get<IUser>(`users/signUp`, user);
    return response.data;
  });

// Action pour la connexion
export const signIn = createAsyncThunk('users/signIn', async () => {
    const response =  await baseWithFormData.get<IUser>(`users/signIn`, user);
    return response.data;
  });

// Action pour l'envoi d'un mot de passe oublié
export const forgotPassword = createAsyncThunk('users/forgotPassword', async () => {
    const response =  await baseWithFormData.get<IUser>(`users/forgotPassword`, email);
    return response.data;
  });

// Action pour vérifier le token
export const checkToken = createAsyncThunk('users/checkToken', async () => {
    const response =  await baseWithFormData.get<IUser>(`users/checkToken`, email);
    return response.data;
  });

// Action pour changer le mot de passe
export const changePassword = createAsyncThunk('users/changePassword', async () => {
    const response =  await baseWithFormData.get<IUser>(`users/changePassword`, email);
    return response.data;
  });

export const getUsers = createAsyncThunk<IUser[]>('users/getUsers', async () => {
    const response =  await baseWithFormData.get<IUser>(`users/getUsers`, user);
    return response.data;
  });