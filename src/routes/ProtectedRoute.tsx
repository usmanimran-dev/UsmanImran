import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2 } from 'lucide-react';

interface ProtectedRouteProps {
    children: JSX.Element;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { isAdmin, loading } = useAuth();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950">
                <div className="flex flex-col items-center gap-4">
                    <Loader2 className="w-8 h-8 text-violet-400 animate-spin" />
                    <p className="text-slate-400 text-sm tracking-widest uppercase">Verifying Access</p>
                </div>
            </div>
        );
    }

    return isAdmin ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
