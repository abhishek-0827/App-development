import axios from 'axios';

const API_URL = 'http://localhost:8080/api/products'; // Adjust the URL to match your backend endpoint

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
