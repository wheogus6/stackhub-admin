export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    adminCode: string;
}

export interface LoginRequest {
    adminId: string;
    password: string;
}