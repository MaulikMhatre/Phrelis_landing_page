const partners = [
    "IBM Watson Health",
    "UCSD Health",
    "Skill India",
    "Builds for Billions",
    "NVIDIA Inception", // Added for tech credibility
    "AWS Healthcare"    // Added for tech credibility
];

export function TrustBar() {
    return (
        <section className="py-12 border-y border-white/5 bg-black/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-sm text-slate-500 font-mono mb-8 tracking-widest uppercase">
                    Trusted by Industry Leaders & Global Institutions
                </p>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
                    {partners.map((partner) => (
                        <div
                            key={partner}
                            className="text-lg md:text-xl font-bold text-slate-300 font-sans tracking-tight"
                        >
                            {partner}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
