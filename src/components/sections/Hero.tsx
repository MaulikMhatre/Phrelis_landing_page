"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
    return (
        <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-black flex items-center justify-center">
            {/* Full Screen Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60 md:opacity-80"
                    src="/videos/hero-heart.mp4"
                />
                {/* Cinematic Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
            </div>

            {/* Centered Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-6 md:space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-4 md:space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-phrelis-blue/30 bg-black/60 backdrop-blur-md text-phrelis-blue text-[10px] md:text-sm font-mono tracking-wider shadow-[0_0_15px_rgba(0,242,255,0.2)]">
                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-phrelis-blue animate-pulse shadow-[0_0_10px_#00f2ff]" />
                        SYSTEM ONLINE
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold leading-[1.1] text-white tracking-tight drop-shadow-2xl">
                        Automating the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-phrelis-blue via-white to-phrelis-purple animate-gradient">
                            Pulse
                        </span>{" "}
                        of Healthcare.
                    </h1>

                    <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light px-4">
                        The central nervous system for potential modern enterprises.
                        <span className="block mt-2 text-slate-400 text-sm md:text-base">Integrating Clinical AI, Operations, and Finance into one Sentinel.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                        <a href="#solutions" className="group relative px-10 py-5 bg-phrelis-blue text-phrelis-charcoal font-bold text-lg rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,242,255,0.5)]">
                            <span className="relative z-10 flex items-center gap-2">
                                Deploy Sentinel <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </span>
                            <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </a>
                        <a href="#technology" className="group px-10 py-5 rounded-xl border border-white/20 bg-white/5 text-white font-medium text-lg hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-md">
                            View Architecture
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                href="#solutions"
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
            >
                <span className="text-xs font-mono text-phrelis-blue mb-2 tracking-widest">SCROLL TO SCAN</span>
                <ChevronDown className="w-6 h-6 text-white animate-bounce" />
            </motion.a>
        </section>
    );
}
