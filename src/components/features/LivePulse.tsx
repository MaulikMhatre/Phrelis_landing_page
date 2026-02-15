"use client";

import { Server, Users } from "lucide-react";

export function LivePulse() {
    return (
        <div className="w-full overflow-hidden flex items-center justify-center gap-12 text-xs font-mono tracking-widest text-phrelis-blue/80">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>SYSTEM STATUS: STABLE</span>
            </div>

            <div className="flex items-center gap-2">
                <Server className="w-3 h-3" />
                <span>AVG LATENCY: 24ms</span>
            </div>

            <div className="flex items-center gap-2">
                <Users className="w-3 h-3" />
                <span>ACTIVE ADMISSIONS: 142</span>
            </div>
        </div>
    );
}
