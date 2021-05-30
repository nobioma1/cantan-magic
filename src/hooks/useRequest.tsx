import { useState } from 'react';

import { BASE_URL } from '../config';

interface IDoRequestParam {
  method: 'get';
  url: string;
  onSuccess?(res: any): void;
  onError?(err: any): void;
}

type State = 'idle' | 'loading' | 'loaded' | 'error';

const useRequest = () => {
  const [errors, setErrors] = useState(null);
  const [state, setState] = useState<State>('idle');

  const doRequest = async ({
    method,
    url,
    onSuccess,
    onError,
  }: IDoRequestParam) => {
    setState('loading');
    try {
      const response = await fetch(`${BASE_URL}${url}`, { method });
      const data = await response.json();
      onSuccess?.(data);
      setState('loaded');
      return data;
    } catch (err) {
      onError?.(err);
      setErrors(err);
      setState('error');
    }
  };

  return {
    state,
    doRequest,
    errors,
  };
};

export default useRequest;
