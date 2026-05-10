import {
    Route,
    Routes,
    Navigate
} from 'react-router-dom';

import React from "react";

import LoginPage from "../pages/auth/LoginPage";

import PrivateRoute from "./PrivateRoute";

import {
    AuthProvider,
    useAuthContext
} from "../store/context/AuthContext";

function RouterContent() {

    const { isLogin } = useAuthContext();

    return (
        <Routes>

            <Route path="/" element={
                    isLogin
                        ? <Navigate to="/main" replace />
                        : <Navigate to="/login" replace />
                }
            />

            <Route path="/login" element={<LoginPage />}/>

            <Route element={<PrivateRoute isLogin={isLogin} />}>
                <Route path="/main" element={<div>MAIN PAGE</div>}/>
            </Route>

        </Routes>
    );
}

const AppRouter = () => {

    return (
        <AuthProvider>
            <RouterContent />
        </AuthProvider>
    );
};

export default AppRouter;