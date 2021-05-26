import { useState } from 'react';

import { BASE_URL } from '../config';

interface IDoRequestParam {
  method: 'get';
  url: string;
  onSuccess?(res: any): void;
  onError?(err: any): void;
}

const useRequest = () => {
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const doRequest = async ({
    method,
    url,
    onSuccess,
    onError,
  }: IDoRequestParam) => {
    setIsLoading(true);

    try {
      const response = await fetch(`${BASE_URL}${url}`, { method });
      const data = await response.json();
      onSuccess?.(data);
      return data;
    } catch (err) {
      onError?.(err);
      setErrors(err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    doRequest,
    errors,
  };
};

export default useRequest;
