import { Navigate, useLocation } from "react-router"
import { useAuth } from "../context/useAuth";

interface ProtectedRouteProps {
    children: React.ReactNode,
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
    const location = useLocation();
    const { isLoggedIn } = useAuth();
    return isLoggedIn() ? (
        <>{children}</>
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    )

}
