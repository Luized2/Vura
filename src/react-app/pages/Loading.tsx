import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import { CheckCircle, Users, Calendar } from "lucide-react";
import siteSeguroImg from "@/react-app/assets/site-seguro.png";
import PaywallPopup from "@/react-app/components/PaywallPopup";

const notifications = [
    { name: "João", action: "acabou de ver as mensagens!" },
    { name: "Maria", action: "iniciou uma investigação!" },
    { name: "Carlos", action: "descobriu a verdade!" },
    { name: "Ana", action: "está analisando conversas!" },
    { name: "Pedro", action: "finalizou o rastreamento!" },
    { name: "Juliana", action: "acabou de acessar!" },
    { name: "Lucas", action: "está verificando fotos!" },
    { name: "Fernanda", action: "completou a análise!" },
];

const maskName = (name: string) => {
    return name[0] + "*".repeat(name.length - 1);
};

export default function LoadingPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { instagram, investigationType } = (location.state as {
        instagram?: string;
        investigationType?: string;
    }) || {};

    const [progress, setProgress] = useState(0);
    const [currentNotification, setCurrentNotification] = useState(0);
    const [showNotification, setShowNotification] = useState(false);
    const [trackedCount, setTrackedCount] = useState(12432);
    const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);

    // Progress: 0% to 100% in 100 seconds
    useEffect(() => {
        const totalDuration = 3000;
        const updateInterval = 100;
        const increment = 100 / (totalDuration / updateInterval);

        intervalRef.current = setInterval(() => {
            setProgress((prev) => {
                const next = prev + increment;
                if (next >= 100) {
                    clearInterval(intervalRef.current);
                    return 100;
                }
                return next;
            });
        }, updateInterval);

        return () => clearInterval(intervalRef.current);
    }, []);

    // Counter increment
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

    // Navigate to home when progress reaches 100%
    useEffect(() => {
        if (progress >= 100) {
            const timer = setTimeout(() => {
                navigate("/results", { state: { instagram, investigationType } });
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [progress, navigate, instagram, investigationType]);

    // Show random notifications
    useEffect(() => {
        const showNext = () => {
            setCurrentNotification(Math.floor(Math.random() * notifications.length));
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 3000);
        };

        showNext();
        const interval = setInterval(showNext, 8000);
        return () => clearInterval(interval);
    }, []);

    // SVG circle progress
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    const displayProgress = Math.floor(progress);

    return (
        <div className="min-h-screen bg-[#f5f5f5] flex flex-col items-center px-4 py-6 relative">
            {/* Main Card */}
            <div className="w-full max-w-sm bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-center mt-4">
                <p className="text-gray-700 text-center text-sm mb-1">
                    Essa análise pode durar até <strong>5 minutos...</strong>
                </p>

                <h2 className="text-sm font-bold text-gray-800 text-center mt-4 mb-1 uppercase tracking-wide">
                    Enquanto finalizamos a investigação
                </h2>
                <p className="text-green-500 font-bold text-lg text-center mb-6">
                    AGUARDE O CARREGAMENTO
                </p>

                {/* Circular Progress */}
                <div className="relative w-44 h-44 mb-6">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
                        {/* Background circle */}
                        <circle
                            cx="80"
                            cy="80"
                            r={radius}
                            fill="none"
                            stroke="#e5e7eb"
                            strokeWidth="8"
                        />
                        {/* Progress circle */}
                        <circle
                            cx="80"
                            cy="80"
                            r={radius}
                            fill="none"
                            stroke="url(#progressGradient)"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            className="transition-all duration-100 ease-linear"
                        />
                        <defs>
                            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#22c55e" />
                                <stop offset="100%" stopColor="#16a34a" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-green-500 text-xs font-semibold">
                            Fazendo a
                        </span>
                        <span className="text-green-500 text-xs font-semibold">
                            investigação
                        </span>
                        <span className="text-4xl font-bold text-gray-800 mt-1">
                            {displayProgress}%
                        </span>
                    </div>
                </div>

                {/* Status Message */}
                <h3 className="text-lg font-bold text-gray-800 text-center mb-2">
                    POR FAVOR, AGUARDE...
                </h3>
                <p className="text-gray-500 text-center text-sm mb-1">
                    Fazendo download das conversas em tempo real.
                </p>
                <p className="text-gray-500 text-center text-sm mb-4">
                    A investigação pode demorar até{" "}
                    <strong className="text-gray-700">5 minutos</strong> para ser concluída!
                </p>

                <p className="text-xs text-gray-400 text-center">
                    Dados protegidos por criptografia.
                </p>
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
            <div className="mt-8 mb-20 text-center">
                <p className="text-xs text-gray-400">Políticas de Privacidade e Cookies</p>
                <p className="text-xs text-gray-400 mt-1">©2025 — Todos os Direitos reservados</p>
            </div>

            {/* Toast Notification */}
            <div
                className={`fixed bottom-6 left-4 right-4 max-w-sm mx-auto transition-all duration-500 ${showNotification
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
            >
                <div className="bg-green-500 text-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg shadow-green-500/30">
                    <CheckCircle className="w-6 h-6 flex-shrink-0" />
                    <p className="text-sm font-medium">
                        {maskName(notifications[currentNotification].name)}{" "}
                        {notifications[currentNotification].action}
                    </p>
                </div>
            </div>

            <PaywallPopup />
        </div>
    );
}
