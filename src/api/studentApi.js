import axiosClient from "./axiosClient";

export const studentApi = {
    getAllStudent: async (params) => {
        const url = '/students';
        const response = await axiosClient.get(url, {params});
        return response
    },
    createStudent: async (body, params) => {
        const url = '/students'
        const resp = await axiosClient.post(url, body, {params})
        return resp
    }
}