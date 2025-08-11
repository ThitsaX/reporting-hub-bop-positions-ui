import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ConfigState, AuthConfig } from './types';

export const initialState: ConfigState = {
  loginEndpoint: '',
  logoutEndpoint: '',
  isAuthEnabled: true,
  userEmail: '',
};

const slice = createSlice({
  name: 'Microfrontend / Auth',
  initialState,
  reducers: {
    setConfig(state: ConfigState, action: PayloadAction<AuthConfig>) {
      return {
        ...state,
        ...action.payload,
      };
    },
    setUserEmail(state: ConfigState, action: PayloadAction<string>) {
      return {
        ...state,
        userEmail: action.payload,
      };
    },
  },
});

export const { reducer, actions } = slice;
export default reducer;
