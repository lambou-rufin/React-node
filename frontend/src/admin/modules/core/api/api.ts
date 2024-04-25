import { createAsyncThunk } from '@reduxjs/toolkit'
import { Personne } from 'admin/utils/interfaces'
import api from 'api/api'

export const fetchProcessStepList = createAsyncThunk<any[], any>(
  'process/step/list',
  async (process) => {
    const response = await api.get<any>(`/api/processes/${process.id}/steps`)
    return response.data.data
  },
)
export const fetchProcesses = createAsyncThunk<any[]>(
  'process/list',
  async () => {
    const response = await api.get<any>(`/api/processes`)
    return response.data.data
  },
)

export const reorderSteps = createAsyncThunk<any, any>('process/steps/reorder', async ({ process_id, steps }) => {
  const response = await api.put<any>(`/api/processes/${process_id}/steps/reorder`, { steps });
  return response.data.data;
});

// USERS
export const fetchUserParticipable = createAsyncThunk<Personne[], any>(
  'process/participant/user/participable',
  async (process) => {
    const response = await api.get<any>(`/api/processes/${process.id}/not-participants`)
    return response.data.data
  },
)

export const createProcessParticipant = createAsyncThunk<any, any>(
  'process/participant/user/participable/create',
  async ({ process_id, credentials }) => {
    const response = await api.post<any>(`/api/processes/${process_id}/participants`, credentials)
    return response.data
  },
)

// PARTICIPANT
export const fetchProcessParticipantList = createAsyncThunk<any[], any>(
  'process/participant/list',
  async (process) => {
    const response = await api.get<any>(`/api/processes/${process.id}/participants`)
    return response.data.data
  },
)
export const fetchProcessStepParticipantList = createAsyncThunk<any[], any>(
  'process/step/participant/list',
  async (step) => {
    const response = await api.get<any>(`/api/processes/steps/${step.id}/participants`)
    return response.data.data
  },
)

export const updateProcessParticipantStatus = createAsyncThunk<any, any>(
  'process/participant/status/update',
  async ({ participant, credentials }) => {
    const response = await api.put<any>(`/api/processes/participants/${participant.pivot_id}`, credentials)
    return response.data
  },
)
export const assignProcessManager = createAsyncThunk<any, any>(
  'process/participant/assing/manager',
  async ({ participant, credentials }) => {
    const response = await api.put<any>(`/api/processes/participants/${participant.pivot_id}`, credentials)
    return response.data
  },
)

export const deleteProcessStepParticipant = createAsyncThunk<any[], any>(
  'process/step/participant/delete',
  async ({ step, participant }) => {
    const response = await api.delete<any>(`/api/processes/steps/${step.id}/participants/${participant.user_id}`)
    return response.data.data
  },
)


// MANAGER
export const fetchProcessManagerList = createAsyncThunk<any[], any>(
  'process/manager/list',
  async (process) => {
    const response = await api.get<any>(`/api/processes/${process.id}/managers`)
    return response.data.data
  },
)

export const addTeamAndPersonManager = createAsyncThunk<any, any>(
  'process/team/manager/create',
  async ({ process_id, credentials }) => {
    const response = await api.post<any>(`/api/processes/${process_id}/managers`, credentials)
    return response.data
  },
)
