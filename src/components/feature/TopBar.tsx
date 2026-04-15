import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

interface TopBarProps {
  title: string;
  subtitle?: string;
}

export default function TopBar({ title, subtitle }: TopBarProps) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async () => {
    setLoggingOut(true);
    await signOut();
    navigate('/login');
  };

  const userInitial = user?.email?.charAt(0).toUpperCase() ?? 'U';

  return (
    <header className="flex items-center justify-between px-6 md:px-8 py-4 bg-white border-b border-[#7ED1F2]/25 flex-shrink-0">
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-[#033E8C] whitespace-nowrap">{title}</h1>
        {subtitle && (
          <p className="text-xs text-[#049DD9]/70 mt-0.5">{subtitle}</p>
        )}
      </div>
      <div className="flex items-center gap-2">
        <button
          className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#7ED1F2]/40 text-[#049DD9] hover:text-[#033E8C] hover:bg-[#7ED1F2]/15 transition-colors cursor-pointer"
          title="Actualizar"
          onClick={() => window.location.reload()}
        >
          <i className="ri-refresh-line text-base" />
        </button>
        <button
          className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#7ED1F2]/40 text-[#049DD9] hover:text-[#033E8C] hover:bg-[#7ED1F2]/15 transition-colors cursor-pointer"
          title="Pantalla completa"
          onClick={() => document.documentElement.requestFullscreen?.()}
        >
          <i className="ri-fullscreen-line text-base" />
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-[#7ED1F2]/30 mx-1" />

        {/* User avatar + email */}
        {user && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-[#033E8C] to-[#049DD9] text-white text-xs font-bold flex-shrink-0">
              {userInitial}
            </div>
            <span className="hidden sm:block text-xs text-[#049DD9]/80 max-w-[140px] truncate">
              {user.email}
            </span>
          </div>
        )}

        {/* Logout */}
        <button
          onClick={handleLogout}
          disabled={loggingOut}
          title="Cerrar sesión"
          className="w-9 h-9 flex items-center justify-center rounded-lg border border-red-200 text-red-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer disabled:opacity-50 whitespace-nowrap"
        >
          {loggingOut ? (
            <i className="ri-loader-4-line text-base animate-spin" />
          ) : (
            <i className="ri-logout-box-r-line text-base" />
          )}
        </button>
      </div>
    </header>
  );
}
