// src/api/authApi.ts
import apiClient from '../api/apiClient';
import {ApiResponse} from "../interface/ApiResponse";
import {LoginRequest, LoginResponse} from "../interface/LoginData";


export interface VerifyPasswordDto {
    password: string;
}


/**
 * 로그인
 */
export const login = (data: LoginRequest) =>
    apiClient.post<ApiResponse<LoginResponse>>(`/api/auth/login/adminLogin`, data);





