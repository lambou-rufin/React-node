import { createAsyncThunk } from '@reduxjs/toolkit';
import { IBill } from '../models';
import { baseWithFormData } from '../../../../../api/api';


// Action pour récupérer la liste des bills
export const getBills = createAsyncThunk<IBill[]>('bill/getBills', async () => {
  const response =  await baseWithFormData.get<IBill>(`bill/getBills`, bill);
  return response.data;
  });

  // Action pour générer un rapport PDF
export const generateReport = createAsyncThunk<string, any>('bill/generateReport', async (orderDetails) => {
  const response = await baseWithFormData.post<string>('/generateReport', orderDetails);
  return response.data.uuid;
});

// Action pour récupérer un PDF
export const getPdf = createAsyncThunk<void, string>('bill/getPdf', async (uuid) => {
  // Vous pouvez ici implémenter la logique pour télécharger le PDF en fonction de l'UUID fourni
  // Si vous utilisez une méthode spécifique dans votre backend, remplacez cette ligne par votre logique de téléchargement de PDF
  console.log(`Fetching PDF with UUID: ${uuid}`);
});

// Action pour supprimer un bill
export const deleteBill = createAsyncThunk<void, number>('bill/deleteBill', async (userId) => {
  await baseWithFormData.delete(`/api/bill/${userId}`);
});
