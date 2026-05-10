import {jwtDecode, JwtPayload} from 'jwt-decode';
import {ApiResponse} from "../interface/ApiResponse";
import {LoginResponse} from "../interface/LoginData";

/**
 * 커스텀 JWT 페이로드 타입
 */
interface CustomJwtPayload extends JwtPayload {
    sub: string;
    code?: string;
    sessionToken?: string;
}

export const getAuthInfo = () => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) return null;

    try {
        const decoded = jwtDecode<CustomJwtPayload>(
            accessToken
        );

        return {
            id: decoded.sub || '',
            code: decoded.code || '',
            sessionToken:
                decoded.sessionToken || '',
        };
    } catch (error) {
        console.error('토큰 디코딩 실패:', error);
        clearTokens();
        return null;
    }
};

export const isTokenValid = (): boolean => {
    const accessToken =
        localStorage.getItem("accessToken");

    if (!accessToken) return false;

    try {
        const decoded =
            jwtDecode<JwtPayload>(accessToken);

        if (!decoded.exp) {
            return false;
        }
        return decoded.exp * 1000 > Date.now();
    } catch (error) {
        return false;
    }
};

/**
 * 토큰 제거
 */
export const clearTokens = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('adminCode');
};

/**
 * 로그인 여부 확인
 */
export const isLoggedIn = (): boolean => {

    return getAuthInfo() !== null;
};

/**
 * 토큰 응답 처리
 */
export const handleTokenResponse = (response: ApiResponse<LoginResponse>) => {
    const { accessToken, refreshToken, adminCode } = response.data;

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem("adminCode", String(adminCode));

    return response.data;
};