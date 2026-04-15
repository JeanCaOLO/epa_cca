import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './router';
import Sidebar from '@/components/feature/Sidebar';
import { AuthContext, useAuthState } from '@/hooks/useAuth';
import { useLocation } from 'react-router-dom';

declare const __BASE_PATH__: string;

function AppLayout() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  if (isLoginPage) {
    return <AppRoutes />;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#F8F9FA]">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden min-w-0">
        <AppRoutes />
      </main>
    </div>
  );
}

function AuthProvider({ children }: { children: React.ReactNode }) {
  const authState = useAuthState();
  return <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>;
}

export default function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <AuthProvider>
        <AppLayout />
      </AuthProvider>
    </BrowserRouter>
  );
}
