import api from './api';

const submitIdea = (idea) => api.post('/idea', idea);
const fetchIdeas = () => api.get('/idea');
const fetchIdeaById = (id) => api.get(`/idea/${id}`);

export default {
  submitIdea,
  fetchIdeas,
  fetchIdeaById,
};
