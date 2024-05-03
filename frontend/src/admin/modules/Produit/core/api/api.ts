import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProduit } from '../models';
import { baseWithFormData } from '../../../../../api/api';

export const fetchProduits = createAsyncThunk<IProduit[]>('produits/fetchProduits', async () => {
  const response = await baseWithFormData.get<any>(`/api/events/paginated?per_page=50&page=1`);
  return response.data.data;
});

export const addProduit = createAsyncThunk<IProduit, IProduit>('produits/addProduit', async (produit) => {
  const response = await baseWithFormData.post<IProduit>(`/api/produits`, produit);
  return response.data;
});

export const updateProduit = createAsyncThunk<IProduit, IProduit>('produits/updateProduit', async (produit) => {
  const response = await baseWithFormData.post<IProduit>(`/api/produits/${produit.id}`, produit);
  return response.data;
});

export const deleteProduit = createAsyncThunk<void, number>('produits/deleteProduit', async (id) => {
  await baseWithFormData.delete(`/api/produits/${id}`);
});
