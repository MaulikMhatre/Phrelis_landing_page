"use client";

import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

// --- 3D Icons ---

function IconShape({ type, color }: { type: 'icosahedron' | 'torus' | 'octahedron'; color: string }) {
    const mesh = useRef<THREE.Mesh>(null);
    const [hovered, setHover] = useState(false);

    useFrame((state, delta) => {
        if (!mesh.current) return;
        // Constant rotation
        mesh.current.rotation.y += delta * 0.5;
        mesh.current.rotation.x += delta * 0.2;

        // Hover effect
        if (hovered) {
            mesh.current.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), 0.1);
            mesh.current.rotation.z += delta; // Spin faster
        } else {
            mesh.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
        }
    });

    const materialProps = {
        color: color,
        wireframe: true,
        transparent: true,
        opacity: 0.8,
    };

    return (
        <mesh
            ref={mesh}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            {type === 'icosahedron' && <icosahedronGeometry args={[1.2, 0]} />}
            {type === 'torus' && <torusGeometry args={[0.8, 0.3, 16, 32]} />}
            {type === 'octahedron' && <octahedronGeometry args={[1.2, 0]} />}
            <meshBasicMaterial {...materialProps} />
        </mesh>
    );
}

function IconCanvas({ type, color }: { type: 'icosahedron' | 'torus' | 'octahedron'; color: string }) {
    return (
        <div className="w-16 h-16 relative">
            <Canvas camera={{ position: [0, 0, 3] }}>
                <ambientLight intensity={0.5} />
                <IconShape type={type} color={color} />
            </Canvas>
        </div>
    );
}

const advantages = [
    {
        type: 'icosahedron',
        title: "Clinical AI",
        description: "Gemini-powered triage logic that processes patient data in real-time to prioritize high-acuity cases.",
        colorName: "text-phrelis-blue",
        hex: "#00f2ff"
    },
    {
        type: 'torus',
        title: "Operational Sync",
        description: "Real-time bed and staff management that synchronizes resources across the entire hospital network.",
        colorName: "text-phrelis-purple",
        hex: "#a855f7"
    },
    {
        type: 'octahedron',
        title: "Financial Integrity",
        description: "Revenue leakage prevention with automated billing audits and burn-rate forecasting.",
        colorName: "text-green-400",
        hex: "#4ade80"
    }
] as const;

export function SentinelAdvantage() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        The <span className="text-phrelis-blue">Sentinel</span> Advantage
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Three pillars of intelligence working in unison to protect patient outcomes and hospital viability.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {advantages.map((adv, index) => (
                        <motion.div
                            key={adv.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="h-full"
                        >
                            <Card glow className="h-full flex flex-col items-start p-8 bg-white/5 border-white/5 group hover:bg-white/10 transition-colors">
                                <div className="mb-6 flex items-center justify-center p-2 rounded-xl bg-black/40 border border-white/10">
                                    <IconCanvas type={adv.type} color={adv.hex} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{adv.title}</h3>
                                <p className="text-slate-400 leading-relaxed mb-6 flex-grow">
                                    {adv.description}
                                </p>

                                <div className="mt-auto pt-6 w-full">
                                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            transition={{ delay: 0.5 + index * 0.2, duration: 1.5 }}
                                            className={`h-full ${adv.colorName.replace('text-', 'bg-')}`}
                                        />
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
