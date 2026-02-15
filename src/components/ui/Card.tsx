import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    glow?: boolean;
}

export function Card({ children, className, glow = false }: CardProps) {
    return (
        <div
            className={cn(
                "glass-panel rounded-2xl p-6 transition-all duration-300 hover:border-white/20",
                glow && "hover:shadow-[0_0_30px_-5px_var(--phrelis-blue)] hover:border-phrelis-blue/30",
                className
            )}
        >
            {children}
        </div>
    );
}
