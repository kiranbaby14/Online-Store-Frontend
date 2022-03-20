import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzBiOTkwMWM2ZTdmMDllY2Q5MmI1ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzM2MDQ0MCwiZXhwIjoxNjQ3NjE5NjQwfQ.EtL3RqVGR8O4KWG28nfQCFqgGN6Y528_DDpPYbVMTJk";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`},
});