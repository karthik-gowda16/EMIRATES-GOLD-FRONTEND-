import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const productService = {
    getAllProducts: (params) => api.get('/products', { params }),
    getProductsByPath: (metalType, category) => api.get(`/${metalType.toLowerCase()}/${category.toLowerCase()}`),
    getProductById: (id) => api.get(`/products/${id}`),
};

export const enquiryService = {
    createEnquiry: (data) => api.post('/enquiries', data),
};

export const blogService = {
    getAllBlogs: () => api.get('/blogs'),
    getBlogById: (id) => api.get(`/blogs/${id}`),
};

export default api;
