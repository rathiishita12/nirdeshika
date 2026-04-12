const isDev = import.meta.env.MODE === 'development';

export const API_URL = isDev
  ? "http://localhost:3000"
  : (import.meta.env.VITE_API_URL || "");

export const PREDICTION_URL = isDev
  ? "http://localhost:5050"
  : (import.meta.env.VITE_PREDICTION_URL || "");
