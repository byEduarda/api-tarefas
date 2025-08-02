import axios from "axios";

const api = axios.create({
    baseURL: "https://api-tarefas-b77j.onrender.com/"
});

export default api;