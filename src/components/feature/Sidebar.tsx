import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { reports } from '@/mocks/reports';

const navItems = [
  { to: '/', label: 'Inicio', icon: 'ri-home-5-line', exact: true },
  ...reports.map((r) => ({ to: `/${r.id}`, label: r.label, icon: r.icon, exact: false })),
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden w-10 h-10 flex items-center justify-center bg-[#033E8C] text-white rounded-lg cursor-pointer"
        onClick={() => setMobileOpen((v) => !v)}
        aria-label="Abrir menú"
      >
        <i className={`text-xl ${mobileOpen ? 'ri-close-line' : 'ri-menu-line'}`} />
      </button>

      {/* Overlay mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full z-40 flex flex-col
          bg-gradient-to-b from-[#033E8C] to-[#049DD9]
          transition-all duration-300 ease-in-out
          ${collapsed ? 'w-[72px]' : 'w-[260px]'}
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        {/* Logo area */}
        <div className={`flex items-center gap-3 px-5 py-6 border-b border-white/10 ${collapsed ? 'justify-center px-0' : ''}`}>
          <img
            src="https://public.readdy.ai/ai/img_res/0c511b2c-83a6-402e-8f80-1f4785e4b534.png"
            alt="Logo"
            className="w-9 h-9 rounded-lg object-cover flex-shrink-0"
          />
          {!collapsed && (
            <span className="text-white font-semibold text-base whitespace-nowrap tracking-wide">
              CCA EPA
            </span>
          )}
        </div>

        {/* Nav items */}
        <nav className="flex-1 py-4 overflow-y-auto">
          {!collapsed && (
            <p className="text-[11px] uppercase tracking-widest text-white/30 px-5 mb-2 mt-2">
              Reportes
            </p>
          )}
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.exact}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-4 px-5 py-3 cursor-pointer transition-all duration-200 relative group
                ${isActive
                  ? 'bg-white/15 text-white before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#FFDC00] before:rounded-r'
                  : 'text-white/55 hover:text-white hover:bg-white/10'
                }
                ${collapsed ? 'justify-center px-0' : ''}
                `
              }
            >
              <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                <i className={`${item.icon} text-lg`} />
              </div>
              {!collapsed && (
                <span className="text-sm font-medium whitespace-nowrap truncate">{item.label}</span>
              )}
              {collapsed && (
                <div className="absolute left-full ml-3 px-2 py-1 bg-[#033E8C] text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 shadow-lg">
                  {item.label}
                </div>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Collapse toggle (desktop only) */}
        <div className="hidden md:flex border-t border-white/10 p-3 justify-end">
          <button
            onClick={() => setCollapsed((v) => !v)}
            className="w-8 h-8 flex items-center justify-center text-white/40 hover:text-white transition-colors cursor-pointer rounded-md hover:bg-white/10"
            aria-label={collapsed ? 'Expandir sidebar' : 'Colapsar sidebar'}
          >
            <i className={`text-base ${collapsed ? 'ri-arrow-right-s-line' : 'ri-arrow-left-s-line'}`} />
          </button>
        </div>
      </aside>

      {/* Spacer for layout */}
      <div
        className={`hidden md:block flex-shrink-0 transition-all duration-300 ${collapsed ? 'w-[72px]' : 'w-[260px]'}`}
      />
    </>
  );
}
