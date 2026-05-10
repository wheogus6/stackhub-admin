import React, {
    createContext,
    useContext,
    useEffect
} from 'react';

import { useNavigate } from 'react-router-dom';

import {
    clearTokens,
    getAuthInfo,
    isTokenValid
} from "../../utils/authUtils";

const AuthContext = createContext<any>(null);

export const AuthProvider = ({children}: { children: React.ReactNode }) => {

    const navigate = useNavigate();
    const isLogin = isTokenValid();

    useEffect(() => {
        const authInfo = getAuthInfo();

        if (authInfo && !isTokenValid()) {
            clearTokens();
            navigate('/login', {
                replace: true
            });
        }

    }, [navigate]);

    return (
        <AuthContext.Provider
            value={{isLogin}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () =>
    useContext(AuthContext);