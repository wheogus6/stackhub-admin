import axios from 'axios';
import {alertAfterFunction} from "../utils/alert";
import {clearTokens} from "../utils/authUtils";

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

apiClient.interceptors.request.use(config => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

apiClient.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            const code = error.response?.data?.code;


            if(code == 'MEMBER_STOPPED') {
                alertAfterFunction(
                    "정지처리 되었습니다. 고객센터에 문의바랍니다.",
                    ()=> {
                        clearTokens();
                        window.location.href = '/login';
                    }
                );
            } else if(code == 'REDIS_TOKEN_INVALIDATED') {
                alertAfterFunction(
                    "다른 기기에서 로그인되어 자동 로그아웃됩니다.",
                    ()=> {
                        clearTokens();
                        window.location.href = '/login';
                    }
                );
            } else {
                clearTokens();
                window.location.href = '/login';
            }
        }
        return Promise.reject(error);
    }
);

export default apiClient;
