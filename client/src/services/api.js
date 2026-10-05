import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getWorkouts = () => {
  return axios.get(`${API_URL}/workouts`);
};

export const addWorkout = (workout) => {
  return axios.post(`${API_URL}/workouts`, workout);
};

export const deleteWorkout = (id) => {
  return axios.delete(`${API_URL}/workouts/${id}`);
};