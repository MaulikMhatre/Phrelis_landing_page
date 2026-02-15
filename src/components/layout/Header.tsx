"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "The Core", href: "/" },
    { name: "Solutions", href: "#solutions" },
    { name: "Technology", href: "#technology" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled && "bg-phrelis-charcoal/80 backdrop-blur-md border-white/10"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-phrelis-blue/20 flex items-center justify-center border border-phrelis-blue/50 group-hover:bg-phrelis-blue/30 transition-colors">
                        <span className="text-phrelis-blue font-bold">P</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">
                        Phrelis<span className="text-phrelis-blue">OS</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-slate-300 hover:text-phrelis-blue transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <button className="px-5 py-2 rounded-full bg-phrelis-blue/10 border border-phrelis-blue/20 text-phrelis-blue text-sm font-medium hover:bg-phrelis-blue/20 transition-all">
                        Access Portal
                    </button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-slate-300 hover:text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-phrelis-charcoal border-b border-white/10">
                    <div className="px-6 py-4 space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block text-sm font-medium text-slate-300 hover:text-phrelis-blue"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <button className="w-full mt-4 px-5 py-2 rounded-full bg-phrelis-blue/10 border border-phrelis-blue/20 text-phrelis-blue text-sm font-medium hover:bg-phrelis-blue/20 transition-all">
                            Access Portal
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
