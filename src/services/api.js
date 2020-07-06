import axios from "axios"

const api = axios.create({
    baseURL: "https://api.covid19api.com/total/dayone/country"
});

export default api;
