import { LivePulse } from "@/components/features/LivePulse";

export function Footer() {
    return (
        <footer className="bg-phrelis-charcoal border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-phrelis-blue/50 blur-[100px]" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-2 space-y-4">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-phrelis-blue/20 flex items-center justify-center border border-phrelis-blue/50">
                            <span className="text-phrelis-blue text-xs font-bold">P</span>
                        </div>
                        <span className="text-lg font-bold text-white">
                            Phrelis<span className="text-phrelis-blue">OS</span>
                        </span>
                    </div>
                    <p className="text-slate-400 text-sm max-w-sm">
                        Automating the Pulse of the Modern Hospital.
                        AI-driven triage, operational synchronization, and financial integrity.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Platform</h4>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li><a href="#" className="hover:text-phrelis-blue transition-colors">Sentinel AI</a></li>
                        <li><a href="#" className="hover:text-phrelis-blue transition-colors">Command Centre</a></li>
                        <li><a href="#" className="hover:text-phrelis-blue transition-colors">Inventory Forecast</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Company</h4>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li><a href="#" className="hover:text-phrelis-blue transition-colors">About</a></li>
                        <li><a href="#" className="hover:text-phrelis-blue transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-phrelis-blue transition-colors">Contact</a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/5 pt-8 mb-12 text-center text-xs text-slate-500">
                &copy; {new Date().getFullYear()} Phrelis Inc. All rights reserved.
            </div>

            {/* Live System Pulse Ticker - Fixed at bottom of viewport or integrated?
          User request: "Footer/Header" - Let's integrate it at the bottom of the footer or floating.
          The user said "Live System Pulse (Footer/Header) ... A small ticker tape at the bottom of the page".
          We'll put it in a separate Fixed component, but referenced here or in Layout.
          For now, let's put it at the bottom of the footer.
      */}
            <div className="border-t border-white/5 bg-black/40 py-2">
                <LivePulse />
            </div>
        </footer>
    );
}
