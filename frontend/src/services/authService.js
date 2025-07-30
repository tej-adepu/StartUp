import api from './api';

const login = (credentials) => api.post('/user/login', credentials);
const register = (userInfo) => api.post('/user/register', userInfo);
const verifyToken = () => api.get('/user/me'); // GET current user

export default {
  login,
  register,
  verifyToken,
};
