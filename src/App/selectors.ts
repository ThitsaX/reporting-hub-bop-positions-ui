import { State } from 'store';

export const getUserEmail = (state: State) => state.config.userEmail;
