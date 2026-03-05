import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { AlertTriangle, MessageCircle, ArrowRight, Lock, Shield, Users, Calendar } from "lucide-react";
import siteSeguroImg from "@/react-app/assets/site-seguro.png";
import PaywallPopup from "@/react-app/components/PaywallPopup";

export default function ResultsPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { instagram, investigationType } = (location.state as {
        instagram?: string;
        investigationType?: string;
    }) || {};

    const [showContent, setShowContent] = useState(false);
    const [showWarning, setShowWarning] = useState(false);
    const [trackedCount, setTrackedCount] = useState(12432);

    useEffect(() => {
        const timer1 = setTimeout(() => setShowContent(true), 800);
        const timer2 = setTimeout(() => setShowWarning(true), 2500);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

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

    const handleViewMessages = () => {
        navigate("/home", { state: { instagram, investigationType } });
    };

    return (
        <div className="min-h-screen bg-[#f5f5f5] flex flex-col items-center px-4 py-6">
            {/* Main Results Card */}
            <div className="w-full max-w-sm bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-center mt-2">
                <h2 className="text-lg font-extrabold text-gray-800 text-center uppercase tracking-wide mb-1">
                    INVESTIGAÇÃO CONCLUÍDA
                </h2>


                {/* Profile Circle */}
                <div className="relative w-28 h-28 mb-4">
                    <div className="absolute inset-0 rounded-full border-[3px] border-green-400 animate-[spin_6s_linear_infinite]" />
                    <div className="absolute inset-2 rounded-full bg-gray-200 flex items-center justify-center">
                        <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="10" r="3.5" fill="#9ca3af" />
                            <path d="M12 15c-4.5 0-7 2.5-7 5v1h14v-1c0-2.5-2.5-5-7-5z" fill="#9ca3af" />
                        </svg>
                    </div>
                </div>

                {/* Username */}
                <p className="text-lg font-bold text-gray-800 mb-2">@{instagram}</p>

                <p className="text-green-500 font-bold text-base text-center mb-1">
                    Análise finalizada
                </p>
                <p className="text-green-500 font-bold text-base text-center mb-5">
                    com sucesso!
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-gray-200 mb-5" />

                {/* Results Section */}
                <div className={`w-full transition-all duration-700 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                    <h3 className="text-sm font-bold text-gray-700 text-center mb-1">
                        Olha o que achamos nesse curto tempo de análise:
                    </h3>
                    <p className="text-gray-600 text-sm text-center mb-5">
                        Nosso sistema examinou cerca de <strong className="text-gray-800">1.237</strong> mensagens, e algumas delas <strong className="text-gray-800">suspeitas...</strong>
                    </p>

                    {/* Finding Items */}
                    <div className="space-y-4 mb-6">
                        {/* Item 1 - Mensagens suspeitas */}
                        <div className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="text-sm text-gray-800">
                                    <strong>13 MENSAGENS SUSPEITAS ENCONTRADAS:</strong> continham a palavra/semelhante <strong>"Gostosa"</strong>
                                </p>
                            </div>
                        </div>

                        {/* Item 2 - Áudios suspeitos */}
                        <div className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="text-sm text-gray-800">
                                    <strong>ÁUDIOS SUSPEITOS ENCONTRADOS:</strong> 17 áudios...
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-gray-200 mb-5" />

                    {/* RED WARNING - Highly suspicious messages */}
                    <div className={`transition-all duration-700 ${showWarning ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                        <div className="bg-red-50 border-2 border-red-400 rounded-xl p-4 mb-5">
                            <div className="flex items-center gap-2 mb-3">
                                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
                                <p className="text-red-600 font-extrabold text-xs uppercase tracking-wide">
                                    ⚠️ ATENÇÃO: MENSAGENS ALTAMENTE SUSPEITAS ENCONTRADAS
                                </p>
                            </div>

                            <p className="text-red-700 font-bold text-xs mb-3 uppercase">
                                Dentre algumas mensagens suspeitas que encontramos, essas duas abaixo chamaram MUITA ATENÇÃO:
                            </p>

                            <div className="space-y-3">
                                <div className="flex items-start gap-2">
                                    <MessageCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-red-800 italic">
                                        "Eu queria só vc"
                                    </p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <MessageCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-red-800 italic">
                                        "deixa eu te ver hj"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* More findings */}
                    <div className="space-y-3 mb-5">
                        <div className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-gray-800">
                                <strong className="text-red-600">41 mensagens</strong> continham a palavra/semelhante <strong>"Amor"</strong>
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-gray-800">
                                <strong className="text-red-600">8 mensagens</strong> continham a palavra/semelhante <strong>"Segredo"</strong>
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-gray-800">
                                <strong className="text-red-600">2 conversas</strong> apagadas recentemente foram marcadas como <strong className="text-red-600">suspeitas.</strong>
                            </p>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-gray-200 mb-5" />

                    {/* Urgency text */}
                    <p className="text-sm text-gray-800 text-center mb-5">
                        Existem mais <strong>40 mensagens suspeitas</strong> que podemos te encaminhar no email, dentre elas <strong>prints e vídeos</strong>
                    </p>

                    {/* CTA Button */}
                    <button
                        onClick={handleViewMessages}
                        className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-green-500/30 flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.98] mb-4 animate-pulse"
                    >
                        <Lock className="w-5 h-5" />
                        <span>Ver todas as conversas</span>
                    </button>

                    <div className="flex items-center justify-center gap-1.5 mb-2">
                        <Shield className="w-3.5 h-3.5 text-gray-400" />
                        <p className="text-xs text-gray-400 text-center">
                            Dados protegidos por criptografia.
                        </p>
                    </div>
                </div>
            </div>

            {/* Info Cards */}
            <div className="w-full max-w-sm mt-6 space-y-3">
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col items-center">
                    <img src={siteSeguroImg} alt="Site Seguro" className="w-28 h-auto mb-3" />
                    <p className="text-sm text-green-600 font-medium text-center">*Esta ferramenta é 100% anônima*</p>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col items-center">
                    <div className="flex items-center gap-2 mb-1">
                        <Users className="w-5 h-5 text-green-500" />
                        <span className="text-3xl font-bold text-gray-800">{formatNumber(trackedCount)}</span>
                    </div>
                    <p className="text-sm text-gray-500">Números de contas rastreadas</p>
                </div>
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
