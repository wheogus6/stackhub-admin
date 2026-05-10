import { Navigate, Outlet } from "react-router-dom";

interface Props {
  isLogin: boolean;
}

export default function PrivateRoute({ isLogin }: Props) {

  return isLogin
      ? <Outlet />
      : <Navigate to="/login" replace />;
}