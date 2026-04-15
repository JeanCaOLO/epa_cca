import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-[#F8F9FA] p-8">
      <i className="ri-map-pin-2-line text-6xl text-gray-200 mb-4" />
      <h2 className="text-xl font-bold text-[#1A1D23] mb-2">Página no encontrada</h2>
      <p className="text-sm text-gray-400 mb-6">La ruta que buscas no existe.</p>
      <button
        onClick={() => navigate('/')}
        className="px-5 py-2 bg-[#1A1D23] text-white text-sm rounded-lg cursor-pointer hover:bg-[#2C3038] transition-colors whitespace-nowrap"
      >
        Volver al inicio
      </button>
    </div>
  );
}
