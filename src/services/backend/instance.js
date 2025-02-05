import axios from "axios";
const instance = axios.create({
    baseURL: "http://localhost:50080/",
});

export default instance;