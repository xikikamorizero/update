import axios from "axios";
import { baseUrl } from "./const";
import { store } from "./context";

export const $voxmentor_api_public = axios.create({
    baseURL: baseUrl,
    headers: {},
});

export const $voxmentor_auth = axios.create({
    baseURL: baseUrl,
    headers: {},
});

$voxmentor_api_public.interceptors.request.use((config: any) => {
    if (!localStorage.getItem("token")) {
        throw new Error("not authorized", config.url);
    } else {
        config.headers.Authorization = `Bearer ${localStorage.getItem(
            "token"
        )}`;
        return config;
    }
});

$voxmentor_api_public.interceptors.response.use(
    (response) => {
        console.log(response.status);
        return response;
    },
    (error) => {
        if (error.response.status == 401) {
            localStorage.removeItem("token");
            store.profile = null;
            store.isAuth = false;
        }
        return Promise.reject(error);
    }
);
