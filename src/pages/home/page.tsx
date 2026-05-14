import { useNavigate } from 'react-router-dom';
import TopBar from '@/components/feature/TopBar';
import { reports } from '@/mocks/reports';

const stats = [
  { label: 'Reportes disponibles', value: '1', icon: 'ri-file-chart-line', color: 'bg-[#FFDC00]/30 text-[#b89e00]' },
  { label: 'Última actualización', value: 'Hoy', icon: 'ri-time-line', color: 'bg-[#FFDC00]/30 text-[#b89e00]' },
  { label: 'Estado del sistema', value: 'Activo', icon: 'ri-checkbox-circle-line', color: 'bg-[#FFDC00]/30 text-[#b89e00]' },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full">
      <TopBar title="Inicio" subtitle="Panel central de reportes Power BI" />

      <div className="flex-1 overflow-y-auto bg-[#f0f7ff] p-6 md:p-8">
        {/* Welcome banner */}
        <div className="relative rounded-2xl overflow-hidden mb-8 min-h-[180px] flex items-center">
          <img
            src="https://readdy.ai/api/search-image?query=abstract%20minimalist%20background%20with%20deep%20navy%20blue%20and%20sky%20blue%20gradient%20tones%2C%20subtle%20geometric%20patterns%2C%20professional%20corporate%20dashboard%20aesthetic%2C%20clean%20modern%20design%20with%20light%20blue%20accents%2C%20elegant%20professional%20look%2C%20high%20quality%20render&width=1200&height=400&seq=hero-bg-blue-02&orientation=landscape"
            alt="Banner"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#033E8C]/90 via-[#049DD9]/65 to-transparent" />
          {/* Decorative yellow dots */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute w-5 h-5 rounded-full bg-[#FFDC00]/70 top-6 right-16" />
            <div className="absolute w-3 h-3 rounded-full bg-[#FFDC00]/50 top-14 right-32" />
            <div className="absolute w-7 h-7 rounded-full bg-[#FFDC00]/40 bottom-6 right-24" />
            <div className="absolute w-2 h-2 rounded-full bg-[#FFDC00]/60 top-8 right-56" />
            <div className="absolute w-4 h-4 rounded-full bg-[#FFDC00]/35 bottom-10 right-48" />
            <div className="absolute w-6 h-6 rounded-full bg-[#FFDC00]/25 top-4 right-80" />
            <div className="absolute w-2 h-2 rounded-full bg-[#FFDC00]/55 bottom-4 right-72" />
            <div className="absolute w-3 h-3 rounded-full bg-[#FFDC00]/45 top-16 right-96" />
          </div>
          <div className="relative z-10 px-8 py-10">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="https://public.readdy.ai/ai/img_res/0c511b2c-83a6-402e-8f80-1f4785e4b534.png"
                alt="Logo"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <span className="text-white/70 text-sm font-medium tracking-wide">CCA EPA</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Bienvenido a tu Panel de Reportes
            </h2>
            <p className="text-white/65 text-sm max-w-md">
              Accede a todos tus informes de Power BI desde un solo lugar. Selecciona un reporte en la barra lateral para comenzar.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-xl p-5 flex items-center gap-4 border border-[#7ED1F2]/20">
              <div className={`w-11 h-11 flex items-center justify-center rounded-xl ${s.color}`}>
                <i className={`${s.icon} text-xl`} />
              </div>
              <div>
                <p className="text-xs text-[#049DD9]/70">{s.label}</p>
                <p className="text-lg font-bold text-[#033E8C]">{s.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Reports grid */}
        <h3 className="text-sm font-semibold text-[#049DD9]/70 uppercase tracking-widest mb-4">
          Reportes disponibles
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reports.map((report, idx) => (
            <button
              key={report.id}
              onClick={() => navigate(`/${report.id}`)}
              className="bg-white rounded-xl p-6 text-left transition-all duration-200 cursor-pointer group border border-transparent hover:border-[#7ED1F2]/50 hover:bg-[#f0f7ff]"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#049DD9]/10 mb-4 group-hover:bg-[#049DD9]/18 transition-colors">
                <i className={`${report.icon} text-2xl text-[#049DD9]`} />
              </div>
              <p className="text-xs text-[#049DD9]/60 mb-1">Informe {idx + 1}</p>
              <h4 className="text-sm font-semibold text-[#033E8C] mb-2 leading-snug">{report.label}</h4>
              <p className="text-xs text-[#049DD9]/60 leading-relaxed">{report.description}</p>
              <div className="mt-4 flex items-center gap-1 text-[#049DD9] text-xs font-medium">
                <span>Ver reporte</span>
                <i className="ri-arrow-right-line text-sm" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
