import { useState } from 'react';
import axios from 'axios';

const useApi = (initialUrl = '') => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const callApi = async (url = initialUrl, options = {}) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios({ url, ...options });
      setData(response.data);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.error || err.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, callApi };
};

export default useApi;
