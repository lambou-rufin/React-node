import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseWithFormData } from '../../../../../api/api';
import { IUser } from '../models';

// Action pour l'inscription
export const registerUser = createAsyncThunk('users/registerUser', async (userData: any) => {
    const response =  await baseWithFormData.post<IUser>(`users/register`, userData);
    return response.data;
});

// Action pour la connexion
export const loginUser = createAsyncThunk('users/loginUser', async (userData: any) => {
    const response =  await baseWithFormData.post<IUser>(`users/login`, userData);
    return response.data;
});

// Action pour l'envoi d'un mot de passe oublié
export const forgotPassword = createAsyncThunk('users/forgotPassword', async (email: string) => {
    const response =  await baseWithFormData.post(`users/forgot-password`, { email });
    return response.data;
});

// Action pour vérifier le token
export const checkToken = createAsyncThunk('users/checkToken', async (email: string) => {
    const response =  await baseWithFormData.post(`users/check-token`, { email });
    return response.data;
});

// Action pour changer le mot de passe
export const changePassword = createAsyncThunk('users/changePassword', async (data: any) => {
    const response =  await baseWithFormData.put(`users/change-password`, data);
    return response.data;
});

export const getUsers = createAsyncThunk<IUser[]>('users/getUsers', async () => {
    const response =  await baseWithFormData.get<IUser[]>('users');
    return response.data;
});
