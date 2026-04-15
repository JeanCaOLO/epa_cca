import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#f5faf9]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center text-[#692764]">
            <i className="ri-loader-4-line text-3xl animate-spin" />
          </div>
          <p className="text-sm text-[#7b7893]">Verificando sesión...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
