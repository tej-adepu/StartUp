import api from './api';

// Admin or dashboard user management calls
const getAllUsers = () => api.get('/user');
const getUserProfile = (id) => api.get(`/user/${id}`);

export default {
  getAllUsers,
  getUserProfile,
};
