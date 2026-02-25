import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { LayoutDashboard } from 'lucide-react';

const AdminFab = () => {
    const { isAdmin } = useAuth();

    return (
        <Link
            to={isAdmin ? '/admin' : '/login'}
            title="Admin Dashboard"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 bg-background/90 hover:bg-white/5 backdrop-blur border border-white/10 hover:border-primary/50 text-white/40 hover:text-primary text-xs font-bold rounded-lg shadow-2xl transition-all duration-300 group"
        >
            <LayoutDashboard className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform duration-300" />
            Admin
        </Link>
    );
};

export default AdminFab;
