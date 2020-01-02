const baseUrl = process.env.REACT_APP_BASE_URL;

export const getTodos = () => fetch(baseUrl).then(res => res.json());
