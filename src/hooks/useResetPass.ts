import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';

interface Data {
  email: string;
  token: string;
}

interface Credentials {
  email: string;
}

export const useResetPass = () => {
  const [data, setData] = useState<Data | null>(null);

  const resetPass = async (credentials: Credentials): Promise<void> => {
    try {
      const response: AxiosResponse<Data> = await axios.post<Data>('https://auth-qa.qencode.com/v1/auth/password-reset', credentials);
      setData(response.data);
    } catch (error) {
      throw new Error('Помилка авторизації: ' + error.response?.data?.message);
    }
  };

  return { data, resetPass };
};
