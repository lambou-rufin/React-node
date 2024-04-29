import { createAsyncThunk } from '@reduxjs/toolkit';
import api, { baseWithFormData } from 'api/api';
import { IEvent } from '../models';

export const fetchEvents = createAsyncThunk<IEvent[]>('events/fetchEvents', async () => {
  const response = await api.get<any>(`/api/events/paginated?per_page=50&page=1`);
  return response.data.data;
});

export const addEvent = createAsyncThunk<IEvent, IEvent>('events/addEvent', async (event) => {
  const response = await baseWithFormData.post<IEvent>(`/api/events`, event);
  return response.data;
});

export const updateEvent = createAsyncThunk<IEvent, IEvent>('events/updateEvent', async (event) => {
  const response = await baseWithFormData.post<IEvent>(`/api/events/${event.id}`, event);
  return response.data;
});

export const deleteEvent = createAsyncThunk<void, number>('events/deleteEvent', async (eventId) => {
  await api.delete(`/api/events/${eventId}`);
});
