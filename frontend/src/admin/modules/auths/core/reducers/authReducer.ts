// authSlice.ts

import { createSlice } from '@reduxjs/toolkit';
import { authenticateToken, checkRole } from '../middlewares/authMiddleware';

interface AuthState {
  user: any; // Remplacez par le type approprié pour vos informations utilisateur
  isAuthenticated: boolean;
  hasRequiredRole: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  hasRequiredRole: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Vos autres actions et réducteurs ici
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticateToken.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(checkRole.fulfilled, (state, action) => {
        state.hasRequiredRole = action.payload;
      });
  },
});

export default authSlice.reducer;
