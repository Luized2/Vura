import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Eye, Users, Calendar } from "lucide-react";
import siteSeguroImg from "@/react-app/assets/site-seguro.png";
import PaywallPopup from "@/react-app/components/PaywallPopup";

const trackingSteps = [
  "Estabelecendo conexão...",
  "Burlando sistemas firewall...",
  "Criando ponte de dados 192.177.82.1",
  "Acessando informações dos Apps",
  "Coletando dados do perfil...",
  "Descriptografando mensagens...",
  "Rastreamento concluído!",
];

export default function SetupPage() {
  const navigate = useNavigate();
  const [instagram, setInstagram] = useState("");
  const [trackedCount, setTrackedCount] = useState(12432);
  const [isTracking, setIsTracking] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState<number>(0);

  // Incrementa o contador a cada 1 minuto
  useEffect(() => {
    const interval = setInterval(() => {
      setTrackedCount((prev) => prev + Math.floor(Math.random() * 5) + 1);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // Data atual de Brasília
  const getBrasiliaDate = () => {
    const now = new Date();
    const brasiliaOffset = -3 * 60;
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const brasiliaTime = new Date(utc + brasiliaOffset * 60000);
    brasiliaTime.setDate(brasiliaTime.getDate() - 2);

    const dias = [
      "Domingo",
      "Segunda-Feira",
      "Terça-Feira",
      "Quarta-Feira",
      "Quinta-Feira",
      "Sexta-Feira",
      "Sábado",
    ];
    const meses = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];

    const diaSemana = dias[brasiliaTime.getDay()];
    const dia = brasiliaTime.getDate().toString().padStart(2, "0");
    const mes = meses[brasiliaTime.getMonth()];
    const ano = brasiliaTime.getFullYear();

    return `${diaSemana}, ${dia} de ${mes} de ${ano}`;
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString("pt-BR");
  };

  const handleSubmit = () => {
    if (instagram.trim() && !isTracking) {
      setIsTracking(true);
      setVisibleSteps(0);

      const stepDelay = 7000 / trackingSteps.length;

      trackingSteps.forEach((_, index) => {
        setTimeout(() => {
          setVisibleSteps(index + 1);
        }, stepDelay * (index + 1));
      });

      setTimeout(() => {
        navigate("/investigation", { state: { instagram: instagram.trim() } });
      }, 10000);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col items-center px-4 py-8">
      {/* Hero Icon */}
      <div className="relative w-48 h-48 mb-6 mt-4">
        <div className="absolute inset-0 rounded-full border-[3px] border-green-200 animate-[spin_8s_linear_infinite]" />
        <div className="absolute inset-3 rounded-full border-[2px] border-green-100 animate-[spin_12s_linear_infinite_reverse]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-28 h-28 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
            <svg
              width="56"
              height="56"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                fill="rgba(255,255,255,0.15)"
              />
              <circle cx="12" cy="10" r="3" fill="white" />
              <path
                d="M12 14c-4 0-6 2-6 4v1h12v-1c0-2-2-4-6-4z"
                fill="white"
              />
              <path
                d="M17.5 6.5l1.5-1.5M6.5 6.5L5 5M12 3V1"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        {/* Floating icons */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
              <path d="M12 15c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3z" />
              <path d="M17 12c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V22h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
            </svg>
          </div>
        </div>
        <div className="absolute top-6 -left-2">
          <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
              <path d="M15 8v8H5V8h10m2-2H3v12h14V6z" />
              <path d="M21 6h-4v12h4V6zm-2 10h-1v-1h1v1z" />
            </svg>
          </div>
        </div>
        <div className="absolute top-8 -right-2">
          <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
              <circle cx="12" cy="12" r="3.2" />
              <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9z" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-6 -right-1">
          <div className="w-7 h-7 bg-white rounded-lg shadow-md flex items-center justify-center border border-gray-200">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#22c55e">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              <path d="M8 12l3 3 5-5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">
        Você tem 1 teste gratuito!
      </h1>
      <p className="text-gray-500 text-center text-sm mb-6 max-w-xs">
        Digite o @ do Instagram da pessoa que você quer rastrear...
      </p>

      {/* Input */}
      <div className="w-full max-w-sm mb-2">
        <div className="flex items-center bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <span className="pl-4 pr-2 text-gray-400 text-lg font-medium select-none">@</span>
          <input
            type="text"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value.replace(/^@/, ""))}
            placeholder="usuario_instagram"
            className="flex-1 py-4 pr-4 text-gray-800 text-base bg-transparent outline-none placeholder:text-gray-300"
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
        </div>
        <p className="text-xs text-gray-400 mt-1.5 ml-1">
          Exemplo: joaosilva_oficial
        </p>
      </div>

      {/* Button */}
      <button
        onClick={handleSubmit}
        disabled={isTracking}
        className={`w-full max-w-sm mt-3 text-white font-semibold py-4 px-6 rounded-xl shadow-lg flex items-center justify-center gap-3 transition-all duration-200 active:scale-[0.98] ${isTracking
          ? "bg-gradient-to-r from-green-600 to-green-700 opacity-90 cursor-not-allowed shadow-green-600/30"
          : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-green-500/30"
          }`}
      >
        {isTracking ? (
          <>
            <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
              <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
            </svg>
            <span>Rastreando...</span>
          </>
        ) : (
          <>
            <Eye className="w-5 h-5" />
            <span>Rastrear Agora</span>
          </>
        )}
      </button>

      {/* Tracking Steps */}
      {isTracking && (
        <div className="w-full max-w-sm mt-4">
          <p className="text-sm font-semibold text-gray-700 mb-3 text-center">
            Iniciando rastreamento...
          </p>
          <div className="bg-[#1a2e1a] rounded-xl p-4 space-y-1.5">
            {trackingSteps.slice(0, visibleSteps).map((step, index) => (
              <p
                key={index}
                className="text-red-500 text-sm font-medium animate-[fadeIn_0.3s_ease-in]"
                style={{ animation: "fadeIn 0.3s ease-in" }}
              >
                {step}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Info Cards */}
      <div className="w-full max-w-sm mt-10 space-y-3">
        {/* Card 1 - Site Seguro */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col items-center">
          <img
            src={siteSeguroImg}
            alt="Site Seguro SSL Verificado"
            className="w-28 h-auto mb-3"
          />
          <p className="text-sm text-green-600 font-medium text-center">
            *Esta ferramenta é 100% anônima*
          </p>
        </div>

        {/* Card 2 - Contas Rastreadas */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-1">
            <Users className="w-5 h-5 text-green-500" />
            <span className="text-3xl font-bold text-gray-800">
              {formatNumber(trackedCount)}
            </span>
          </div>
          <p className="text-sm text-gray-500">Números de contas rastreadas</p>
        </div>

        {/* Card 3 - Ferramenta Atualizada */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-1">
            <Calendar className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-500">Ferramenta Atualizada:</span>
          </div>
          <p className="text-base font-bold text-gray-800 text-center">
            {getBrasiliaDate()}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 mb-4 text-center">
        <p className="text-xs text-gray-400">Políticas de Privacidade e Cookies</p>
        <p className="text-xs text-gray-400 mt-1">
          ©2025 — Todos os Direitos reservados
        </p>
      </div>

      <PaywallPopup />
    </div>
  );
}
