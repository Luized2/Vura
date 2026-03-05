import { useState, useEffect } from "react";

const PAYWALL_KEY = "paywallTriggered";

export function triggerPaywall() {
    localStorage.setItem(PAYWALL_KEY, "true");
}

export function isPaywallActive(): boolean {
    return localStorage.getItem(PAYWALL_KEY) === "true";
}

export default function PaywallPopup() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (isPaywallActive()) {
            setVisible(true);
        }
    }, []);

    if (!visible) return null;

    return (
        <>
            <div
                className="fixed inset-0 z-50 flex items-end justify-center"
                style={{ animation: "fadeIn 0.4s ease-out" }}
            >
                {/* Backdrop blur overlay */}
                <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

                {/* Popup content */}
                <div
                    className="relative w-full max-w-md rounded-t-3xl px-6 pt-8 pb-10 flex flex-col items-center"
                    style={{
                        background: "linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%)",
                        animation: "slideUp 0.5s ease-out",
                        boxShadow: "0 -8px 40px rgba(0,0,0,0.6)",
                    }}
                >
                    {/* Warning icon */}
                    <div className="w-20 h-20 mb-4 flex items-center justify-center">
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                            <path
                                d="M40 5L5 72h70L40 5z"
                                fill="#FBBF24"
                                stroke="#F59E0B"
                                strokeWidth="2"
                            />
                            <text
                                x="40"
                                y="58"
                                textAnchor="middle"
                                fontSize="36"
                                fontWeight="bold"
                                fill="#1a1a1a"
                            >
                                !
                            </text>
                        </svg>
                    </div>

                    {/* Title */}
                    <h2 className="text-white text-2xl font-extrabold text-center mb-3 tracking-wide">
                        ATENÇÃO
                    </h2>

                    {/* Urgency copy */}
                    <p className="text-white text-center text-base leading-relaxed mb-2 font-medium px-2">
                        O número receberá um{" "}
                        <strong className="text-yellow-400">
                            SMS avisando a espionagem
                        </strong>{" "}
                        caso o pagamento não seja finalizado.
                    </p>

                    {/* Scarcity timer */}
                    <p className="text-gray-300 text-center text-sm mb-5">
                        Finalize agora por apenas!
                    </p>

                    {/* Price */}
                    <p
                        className="text-5xl font-black text-center mb-6"
                        style={{ color: "#22c55e" }}
                    >
                        R$ 25,90
                    </p>

                    {/* CTA Button */}
                    <button
                        onClick={() => {
                            window.location.href = "https://buy.stripe.com/fZu4gA1cQ5nD7qU30I2go01";
                        }}
                        className="w-full py-4 rounded-2xl text-white text-lg font-extrabold uppercase tracking-wider shadow-xl transition-all duration-200 active:scale-[0.97]"
                        style={{
                            background: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)",
                            boxShadow: "0 4px 20px rgba(220, 38, 38, 0.5)",
                        }}
                    >
                        FINALIZAR PAGAMENTO
                    </button>

                    {/* Trust note */}
                    <p className="text-gray-400 text-xs text-center mt-4 leading-relaxed">
                        O SMS é cancelado assim que o pagamento é concluído.
                    </p>
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from { transform: translateY(100%); }
                    to { transform: translateY(0); }
                }
            `}</style>
        </>
    );
}
