import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
    isLoading: false,
    error: false,
  },
  reducers: {
    loginStart: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.isAuthenticated = true;
      state.user = action.payload;
      return state;
    },
    loginFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    signupStart: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    signupSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
      state.isAuthenticated = true;

      return state;
    },
    signupFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('userInfo');
    },
    updateUserData: (state, action) => {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      const storedData = JSON.parse(localStorage.getItem('userInfo'));
      storedData.data.name = action.payload.name;
      storedData.data.email = action.payload.email;
      localStorage.setItem('userInfo', JSON.stringify(storedData));
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailed,
  signupStart,
  signupSuccess,
  signupFailed,
  logout,
  updateUserData,
} = authSlice.actions;

export const isLoading = (state) => state.auth.isLoading;
export const isAuthenticated = (state) => state.auth.isAuthenticated;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
