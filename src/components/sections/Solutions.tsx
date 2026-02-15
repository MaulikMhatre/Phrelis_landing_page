"use client";

import { Card } from "@/components/ui/Card";
import { Siren, Pill, TrendingDown, Map } from "lucide-react";

export function Solutions() {
    return (
        <section id="solutions" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Department-Specific <span className="text-phrelis-blue">Intelligence</span>
                    </h2>
                    <p className="text-slate-400">
                        Tailored modules for high-stress environments.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {/* Emergency & ICU - Large Card */}
                    <Card glow className="md:col-span-2 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-phrelis-blue/5 to-transparent transition-opacity opacity-0 group-hover:opacity-100" />
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-phrelis-blue/20 rounded-lg text-phrelis-blue">
                                        <Siren className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Emergency & ICU</h3>
                                </div>
                                <p className="text-slate-400 max-w-md">
                                    Managing high-acuity patients with AI. Automated ESI triage scoring and bed allocation logic.
                                </p>
                            </div>

                            {/* Visual: Code Snippet / Logic Visualization */}
                            <div className="mt-6 bg-black/40 rounded-lg p-4 font-mono text-xs text-slate-300 border border-white/5 overflow-hidden">
                                <div className="flex items-center gap-2 mb-2 text-slate-500">
                                    <span className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                    <span className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                    <span className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                                    <span className="ml-auto">triage_logic.py</span>
                                </div>
                                <pre className="opacity-80">
                                    <span className="text-phrelis-purple">def</span> <span className="text-phrelis-blue">classify_patient</span>(vitals):{"\n"}
                                    {"  "}<span className="text-phrelis-purple">if</span> vitals.spo2 &lt; 90 <span className="text-phrelis-purple">or</span> vitals.hr &gt; 120:{"\n"}
                                    {"    "}<span className="text-phrelis-purple">return</span> <span className="text-green-400">&quot;ESI_LEVEL_1&quot;</span>{"\n"}
                                    {"  "}<span className="text-phrelis-purple">elif</span> resource_load &gt; 0.9:{"\n"}
                                    {"    "}<span className="text-phrelis-purple">return</span> <span className="text-yellow-400">&quot;DIVERT_TO_PARTNER&quot;</span>
                                </pre>
                            </div>
                        </div>
                    </Card>

                    {/* Inventory & Pharmacy */}
                    <Card glow className="relative overflow-hidden group">
                        <div className="h-full flex flex-col">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-phrelis-purple/20 rounded-lg text-phrelis-purple">
                                    <Pill className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Inventory</h3>
                            </div>
                            <p className="text-sm text-slate-400 mb-6">
                                Burn-rate forecasting and stock automation.
                            </p>

                            {/* Visual: Mini Graph */}
                            <div className="mt-auto bg-black/20 rounded-lg p-4 border border-white/5">
                                <div className="flex justify-between text-xs text-slate-400 mb-2">
                                    <span>Epinephrine</span>
                                    <span className="text-red-400 flex items-center gap-1"><TrendingDown className="w-3 h-3" /> -12%</span>
                                </div>
                                <div className="h-20 flex items-end gap-1">
                                    {[40, 60, 55, 45, 30, 20, 15].map((h, i) => (
                                        <div key={i} style={{ height: `${h}%` }} className="w-full bg-phrelis-purple/30 rounded-t-sm hover:bg-phrelis-purple transition-colors" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Command Centre */}
                    <Card glow className="md:col-span-3 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 group">
                        <div className="flex-1 p-2">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                                    <Map className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">The Command Centre</h3>
                            </div>
                            <p className="text-slate-400 max-w-lg mb-6">
                                City-wide hospital diversion logic for administrators. Visualize occupancy across all nodes and reroute ambulances instantly.
                            </p>

                        </div>

                        {/* Visual: Abstract Map Nodes */}
                        <div className="flex-1 w-full h-full min-h-[200px] relative bg-black/20 rounded-xl overflow-hidden border border-white/5">
                            <div className="absolute inset-0 flex items-center justify-center">
                                {/* Central Node */}
                                <div className="relative z-10">
                                    <div className="w-4 h-4 rounded-full bg-phrelis-blue shadow-[0_0_20px_rgba(0,242,255,0.6)] animate-pulse" />
                                    <div className="absolute -top-6 -left-4 text-[10px] text-phrelis-blue bg-black/60 px-2 py-0.5 rounded border border-phrelis-blue/20">Phrelis Core</div>
                                </div>

                                {/* Satellite Nodes */}
                                <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-phrelis-purple/80" />
                                <div className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-green-500/80" />

                                {/* Connection Lines (SVG) */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                                    <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#00f2ff" strokeWidth="1" strokeDasharray="4 4" />
                                    <line x1="50%" y1="50%" x2="75%" y2="66%" stroke="#00f2ff" strokeWidth="1" strokeDasharray="4 4" />
                                </svg>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
