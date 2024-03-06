import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';

interface User {
  email: string;
  token: string;
}

interface Credentials {
  email: string;
  password: string;
}

export const useAuthentication = () => {
  const [user, setUser] = useState<User | null>(null);

  const loginUser = async (credentials: Credentials): Promise<void> => {
    try {
      const response: AxiosResponse<User> = await axios.post<User>('https://auth-qa.qencode.com/v1/auth/login', credentials);
      setUser(response.data);
    } catch (error) {
      throw new Error('Помилка авторизації: ' + error.response?.data?.message);
    }
  };

  return { user, loginUser };
};
