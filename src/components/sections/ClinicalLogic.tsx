"use client";

import { Card } from "@/components/ui/Card";
import { User, Bot, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const chatHistory = [
    {
        role: "user",
        content: "Male, 58. Chest pain radiating to left arm. Sweating. BP 160/95."
    },
    {
        role: "ai",
        content: "Analysis complete. Symptoms suggest Acute Myocardial Infarction. \n\nESI Level: 1 (Immediate)\nAction: Activate Cath Lab Team.\nBed Assn: ICU-04 (Reserved)."
    }
];

export function ClinicalLogic() {
    return (
        <section className="py-24 bg-gradient-to-b from-phrelis-charcoal to-black relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-phrelis-blue/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-phrelis-purple/30 bg-phrelis-purple/5 text-phrelis-purple text-xs font-mono tracking-wider mb-6">
                        <Bot className="w-3 h-3" />
                        CLINICAL DECISION SUPPORT
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        &quot;Phrelis isn&apos;t just software; it&apos;s a <span className="text-phrelis-blue">second opinion</span> that never sleeps.&quot;
                    </h2>

                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                        Our Sentinel AI continuously monitors patient vitals and lab results, cross-referencing against millions of clinical pathways to catch deterioration before it becomes critical.
                    </p>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4 text-slate-300">
                            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                                <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <span>Reduces triage errors by 40%</span>
                        </div>
                        <div className="flex items-center gap-4 text-slate-300">
                            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                                <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <span>Sub-second alerts for sepsis markers</span>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    {/* Chat Interface Mockup */}
                    <Card glow className="p-0 overflow-hidden border-phrelis-blue/20 bg-black/40 backdrop-blur-xl">
                        <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/5">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-sm font-bold text-white">Sentinel AI Agent</span>
                            </div>
                            <div className="text-xs text-slate-500">v4.2.0 • Live</div>
                        </div>

                        <div className="p-4 md:p-6 space-y-6 min-h-[300px]">
                            {chatHistory.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.5 }}
                                    className={`flex gap-4 ${msg.role === 'ai' ? 'flex-row' : 'flex-row-reverse'}`}
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'ai' ? 'bg-phrelis-blue/20 text-phrelis-blue' : 'bg-slate-700 text-slate-300'}`}>
                                        {msg.role === 'ai' ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
                                    </div>
                                    <div className={`rounded-2xl p-4 max-w-[80%] text-sm leading-relaxed ${msg.role === 'ai' ? 'bg-phrelis-blue/10 text-white border border-phrelis-blue/20' : 'bg-slate-800 text-slate-300'}`}>
                                        <p className="whitespace-pre-line">{msg.content}</p>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Typing Indicator */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 2 }}
                                className="flex gap-4"
                            >
                                <div className="w-8 h-8 rounded-full bg-phrelis-blue/20 flex items-center justify-center shrink-0 text-phrelis-blue">
                                    <Bot className="w-5 h-5" />
                                </div>
                                <div className="bg-phrelis-blue/10 rounded-2xl p-4 border border-phrelis-blue/20 flex gap-1 items-center h-10">
                                    <span className="w-1.5 h-1.5 bg-phrelis-blue rounded-full animate-bounce [animation-delay:-0.3s]" />
                                    <span className="w-1.5 h-1.5 bg-phrelis-blue rounded-full animate-bounce [animation-delay:-0.15s]" />
                                    <span className="w-1.5 h-1.5 bg-phrelis-blue rounded-full animate-bounce" />
                                </div>
                            </motion.div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
