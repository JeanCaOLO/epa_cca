import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

export default function LoginPage() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const { error: authError } = await signIn(email, password);
    setLoading(false);
    if (authError) {
      setError('Correo o contraseña incorrectos. Intenta de nuevo.');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left panel - image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img
          src="https://readdy.ai/api/search-image?query=abstract%20minimalist%20background%20with%20deep%20navy%20blue%20and%20sky%20blue%20gradient%20tones%2C%20subtle%20geometric%20patterns%2C%20professional%20corporate%20dashboard%20aesthetic%2C%20clean%20modern%20design%20with%20light%20blue%20accents%2C%20elegant%20professional%20look%2C%20high%20quality%20render%2C%20smooth%20flowing%20shapes&width=800&height=1000&seq=login-bg-blue-01&orientation=portrait"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#033E8C] via-[#049DD9]/90 to-[#7ED1F2]/70" />
        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          <div className="flex items-center gap-3">
            <img
              src="https://public.readdy.ai/ai/img_res/0c511b2c-83a6-402e-8f80-1f4785e4b534.png"
              alt="Logo"
              className="w-10 h-10 rounded-lg object-cover"
            />
            <span className="text-white font-semibold text-lg tracking-wide">CCA EPA</span>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-4 leading-snug">
              Centraliza tus reportes<br />en un solo lugar
            </h2>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Accede a todos tus informes de Power BI de forma rápida, segura y organizada.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              {['Reportes en tiempo real', 'Acceso seguro y privado', 'Interfaz intuitiva'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#FFDC00]/25">
                    <i className="ri-check-line text-[#FFDC00] text-xs" />
                  </div>
                  <span className="text-white/75 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right panel - form */}
      <div className="flex-1 flex items-center justify-center bg-[#f0f7ff] px-6 py-12">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="flex items-center gap-3 mb-8 lg:hidden">
            <img
              src="https://public.readdy.ai/ai/img_res/0c511b2c-83a6-402e-8f80-1f4785e4b534.png"
              alt="Logo"
              className="w-9 h-9 rounded-lg object-cover"
            />
            <span className="text-[#033E8C] font-semibold text-base tracking-wide">CCA EPA</span>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-[#7ED1F2]/25">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-[#033E8C] mb-1">Iniciar sesión</h1>
              <p className="text-sm text-[#049DD9]/70">Ingresa tus credenciales para continuar</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#033E8C] uppercase tracking-wide">
                  Correo electrónico
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center text-[#049DD9]">
                    <i className="ri-mail-line text-base" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="tu@correo.com"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#7ED1F2]/40 bg-[#f0f7ff] text-sm text-[#033E8C] placeholder-[#049DD9]/40 focus:outline-none focus:border-[#049DD9]/60 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#033E8C] uppercase tracking-wide">
                  Contraseña
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center text-[#049DD9]">
                    <i className="ri-lock-line text-base" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="••••••••"
                    className="w-full pl-10 pr-12 py-3 rounded-lg border border-[#7ED1F2]/40 bg-[#f0f7ff] text-sm text-[#033E8C] placeholder-[#049DD9]/40 focus:outline-none focus:border-[#049DD9]/60 focus:bg-white transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center text-[#049DD9] hover:text-[#033E8C] transition-colors cursor-pointer"
                  >
                    <i className={`text-base ${showPassword ? 'ri-eye-off-line' : 'ri-eye-line'}`} />
                  </button>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                  <div className="w-4 h-4 flex items-center justify-center text-red-500">
                    <i className="ri-error-warning-line text-sm" />
                  </div>
                  <p className="text-xs text-red-600">{error}</p>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-[#033E8C] to-[#049DD9] text-white text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap mt-1"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <i className="ri-loader-4-line animate-spin text-base" />
                    Ingresando...
                  </span>
                ) : (
                  'Ingresar'
                )}
              </button>
            </form>
          </div>

          <p className="text-center text-xs text-[#049DD9]/60 mt-6">
            ¿Problemas para ingresar? Contacta al administrador del sistema.
          </p>
        </div>
      </div>
    </div>
  );
}
