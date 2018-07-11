//@flow
import axios from 'axios';
import { CONFIG } from '@core/config';

export type LoginApi = {
  email: string,
  password: string,
  remember_me: string,
};

export const login = async (value: LoginApi) => {
  const url = `${CONFIG.api.apiUrl}/users/sign_in`;
  const data = {
    user: {
      ...value,
    },
  };
  const response = await axios.post(url, data);
  return response.data;
};
