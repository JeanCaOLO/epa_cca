import { useState, useEffect } from 'react';

interface IframePanelProps {
  src: string;
  title: string;
}

export default function IframePanel({ src, title }: IframePanelProps) {
  const [loading, setLoading] = useState(true);
  const [key, setKey] = useState(0);

  useEffect(() => {
    setLoading(true);
    setKey((k) => k + 1);
  }, [src]);

  if (!src) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-[#f0f7ff] p-8">
        <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-[#7ED1F2]/15 mb-5">
          <i className="ri-link-unlink-m text-4xl text-[#7ED1F2]" />
        </div>
        <h3 className="text-lg font-semibold text-[#033E8C] mb-2">Sin URL configurada</h3>
        <p className="text-sm text-[#049DD9]/70 text-center max-w-xs">
          Edita el archivo <code className="bg-[#7ED1F2]/15 px-1 rounded text-xs text-[#033E8C]">src/mocks/reports.ts</code> y agrega la URL de tu reporte Power BI en el campo <code className="bg-[#7ED1F2]/15 px-1 rounded text-xs text-[#033E8C]">iframeSrc</code>.
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 relative overflow-hidden bg-[#f0f7ff] p-4 md:p-6">
      <div className="w-full h-full rounded-xl overflow-hidden bg-white relative">
        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 z-10">
            <div className="w-10 h-10 border-4 border-[#049DD9] border-t-transparent rounded-full animate-spin mb-3" />
            <p className="text-sm text-[#049DD9]/70">Cargando reporte...</p>
          </div>
        )}
        <iframe
          key={key}
          src={src}
          title={title}
          className="w-full h-full border-0"
          allowFullScreen
          onLoad={() => setLoading(false)}
        />
      </div>
    </div>
  );
}
