import { createAsyncThunk } from '@reduxjs/toolkit';
import api, { baseWithFormData } from 'api/api';
import { IEvent } from '../models';

export const fetchCategory = createAsyncThunk<IEvent[]>('category/fetchCategory', async () => {
  const response = await api.get<any>(`/api/events/paginated?per_page=50&page=1`);
  return response.data.data;
});

export const addCategory = createAsyncThunk<IEvent, IEvent>('events/addEvent', async (event) => {
  const response = await baseWithFormData.post<IEvent>(`/api/events`, event);
  return response.data;
});

export const updateCategory = createAsyncThunk<IEvent, IEvent>('events/updateEvent', async (event) => {
  const response = await baseWithFormData.post<IEvent>(`/api/events/${event.id}`, event);
  return response.data;
});

export const deleteCategory = createAsyncThunk<void, number>('events/deleteEvent', async (eventId) => {
  await api.delete(`/api/events/${eventId}`);
});
