import { createSlice } from '@reduxjs/toolkit';
import { authenticateToken, checkRole } from '../middlewares/authMiddleware';

interface AuthState {
  user: any;
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
    // Vous pouvez ajouter d'autres actions et réducteurs ici si nécessaire
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticateToken.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(authenticateToken.rejected, (state) => {
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(checkRole.fulfilled, (state, action) => {
        state.hasRequiredRole = action.payload;
      })
      .addCase(checkRole.rejected, (state) => {
        state.hasRequiredRole = false;
      });
  },
});

export default authSlice.reducer;
