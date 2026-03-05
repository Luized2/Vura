import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { Search, Shield, Users, Calendar } from "lucide-react";
import siteSeguroImg from "@/react-app/assets/site-seguro.png";
import PaywallPopup from "@/react-app/components/PaywallPopup";

export default function InvestigationPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const instagram = (location.state as { instagram?: string })?.instagram || "";
    const [trackedCount, setTrackedCount] = useState(12432);

    useEffect(() => {
        const interval = setInterval(() => {
            setTrackedCount((prev) => prev + Math.floor(Math.random() * 5) + 1);
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    const getBrasiliaDate = () => {
        const now = new Date();
        const brasiliaOffset = -3 * 60;
        const utc = now.getTime() + now.getTimezoneOffset() * 60000;
        const brasiliaTime = new Date(utc + brasiliaOffset * 60000);
        brasiliaTime.setDate(brasiliaTime.getDate() - 2);
        const dias = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
        const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        return `${dias[brasiliaTime.getDay()]}, ${brasiliaTime.getDate().toString().padStart(2, "0")} de ${meses[brasiliaTime.getMonth()]} de ${brasiliaTime.getFullYear()}`;
    };

    const formatNumber = (num: number) => num.toLocaleString("pt-BR");

    const handleInvestigation = (type: "completa" | "simples") => {
        navigate("/loading", { state: { instagram, investigationType: type } });
    };

    return (
        <div className="min-h-screen bg-[#f5f5f5] flex flex-col items-center px-4 py-8">
            {/* Main Card */}
            <div className="w-full max-w-sm bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-center mt-4">
                <h2 className="text-lg font-bold text-gray-800 text-center mb-5">
                    Primeira fase da investigação completa!
                </h2>

                {/* Profile Circle */}
                <div className="relative w-32 h-32 mb-4">
                    <div className="absolute inset-0 rounded-full border-[3px] border-green-400 animate-[spin_6s_linear_infinite]" />
                    <div className="absolute inset-2 rounded-full bg-gray-200 flex items-center justify-center">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="10" r="3.5" fill="#9ca3af" />
                            <path d="M12 15c-4.5 0-7 2.5-7 5v1h14v-1c0-2.5-2.5-5-7-5z" fill="#9ca3af" />
                        </svg>
                    </div>
                </div>

                {/* Username */}
                <p className="text-xl font-bold text-gray-800 mb-4">@{instagram}</p>

                {/* Status */}
                <p className="text-green-500 font-semibold text-base mb-1 animate-pulse">
                    Analisando...
                </p>
                <p className="text-gray-800 font-bold text-center text-sm mb-4">
                    Já estamos conectados ao Instagram dessa pessoa!
                </p>
                <p className="text-gray-500 text-center text-xs mb-6">
                    Agora é a hora da verdade! Escolha o tipo de investigação:
                </p>

                {/* Investigation Options */}
                <button
                    onClick={() => handleInvestigation("completa")}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg shadow-green-500/30 flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.98] mb-3"
                >
                    <Search className="w-5 h-5" />
                    <span>Iniciar investigação completa</span>
                    <span>🔎</span>
                </button>

                <button
                    onClick={() => handleInvestigation("simples")}
                    className="w-full bg-white border-2 border-green-500 text-green-600 font-semibold py-4 px-6 rounded-xl hover:bg-green-50 flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.98]"
                >
                    <Shield className="w-5 h-5" />
                    <span>Iniciar investigação simples</span>
                </button>

                <p className="text-xs text-gray-400 mt-4 text-center">
                    Dados protegidos por criptografia.
                </p>
            </div>

            {/* Info Cards */}
            <div className="w-full max-w-sm mt-6 space-y-3">
                {/* Site Seguro */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col items-center">
                    <img src={siteSeguroImg} alt="Site Seguro" className="w-28 h-auto mb-3" />
                    <p className="text-sm text-green-600 font-medium text-center">
                        *Esta ferramenta é 100% anônima*
                    </p>
                </div>

                {/* Contas Rastreadas */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col items-center">
                    <div className="flex items-center gap-2 mb-1">
                        <Users className="w-5 h-5 text-green-500" />
                        <span className="text-3xl font-bold text-gray-800">{formatNumber(trackedCount)}</span>
                    </div>
                    <p className="text-sm text-gray-500">Números de contas rastreadas</p>
                </div>

                {/* Ferramenta Atualizada */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col items-center">
                    <div className="flex items-center gap-2 mb-1">
                        <Calendar className="w-5 h-5 text-green-500" />
                        <span className="text-sm text-gray-500">Ferramenta Atualizada:</span>
                    </div>
                    <p className="text-base font-bold text-gray-800 text-center">{getBrasiliaDate()}</p>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-8 mb-4 text-center">
                <p className="text-xs text-gray-400">Políticas de Privacidade e Cookies</p>
                <p className="text-xs text-gray-400 mt-1">©2025 — Todos os Direitos reservados</p>
            </div>

            <PaywallPopup />
        </div>
    );
}
