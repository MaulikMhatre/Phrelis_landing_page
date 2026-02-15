"use client";

import { Database, Cpu, Network } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import { Float, Html } from "@react-three/drei";

function ServerUnit({ position }: { position: [number, number, number] }) {
    const [active, setActive] = useState(false);
    // Use state for purely random color initialization to avoid impure render
    const [secondaryColor] = useState(() => Math.random() > 0.5 ? "#a855f7" : "#111");

    useFrame(() => {
        if (Math.random() > 0.98) setActive(true);
        if (Math.random() > 0.9) setActive(false);
    });

    return (
        <group position={position}>
            {/* Server Chassis */}
            <mesh>
                <boxGeometry args={[3, 0.5, 3]} />
                <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
                <lineSegments>
                    <edgesGeometry args={[new THREE.BoxGeometry(3, 0.5, 3)]} />
                    <lineBasicMaterial color="#333" />
                </lineSegments>
            </mesh>
            {/* Blinking Light */}
            <mesh position={[1.2, 0, 1.51]}>
                <sphereGeometry args={[0.05, 16, 16]} />
                <meshBasicMaterial color={active ? "#00f2ff" : "#111"} />
            </mesh>
            {/* Secondary Light (Static random) */}
            <mesh position={[1.0, 0, 1.51]}>
                <sphereGeometry args={[0.05, 16, 16]} />
                <meshBasicMaterial color={secondaryColor} />
            </mesh>
        </group>
    );
}

function FloatingServerRack() {
    const group = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!group.current) return;
        group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    });

    return (
        <group ref={group} rotation={[0, -0.5, 0]}>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                <ServerUnit position={[0, 1.5, 0]} />
                <ServerUnit position={[0, 0.8, 0]} />
                <ServerUnit position={[0, 0.1, 0]} />
                <ServerUnit position={[0, -0.6, 0]} />
                <ServerUnit position={[0, -1.3, 0]} />

                {/* Holographic Code Overlay */}
                <Html transform position={[1.8, 0, 2]} scale={0.4} rotation={[0, -0.2, 0]} className="pointer-events-none select-none">
                    <div className="bg-black/80 backdrop-blur-md p-6 rounded-lg border border-phrelis-blue/30 text-xs font-mono text-phrelis-blue w-64 shadow-[0_0_30px_rgba(0,242,255,0.1)]">
                        <div className="opacity-50 mb-2">{`// sentinel_kernel.py`}</div>
                        <div className="text-white">class SentinelEngine:</div>
                        <div className="pl-4 text-emerald-400">def optimize_route(self):</div>
                        <div className="pl-8 text-slate-400">node = graph.scan()</div>
                        <div className="pl-8 text-slate-400">return node.dispatch()</div>
                    </div>
                </Html>
            </Float>
        </group>
    );
}

export function TechStack() {
    return (
        <section id="technology" className="py-24 bg-black/20 border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-6 relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            The <span className="text-phrelis-purple">Phrelis Stack</span>
                        </h2>
                        <p className="text-slate-400 leading-relaxed">
                            Built on a foundation of high-performance Python and React.
                            Our architecture ensures sub-millisecond latency for critical decision-making. It&apos;s designed for speed.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <div className="mt-1 p-1 bg-phrelis-purple/20 rounded text-phrelis-purple">
                                    <Database className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">FastAPI Backend</h4>
                                    <p className="text-sm text-slate-500">Async-first architecture handling thousands of concurrent requests.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 p-1 bg-phrelis-blue/20 rounded text-phrelis-blue">
                                    <Cpu className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">190-Bed State Machine</h4>
                                    <p className="text-sm text-slate-500">Deterministic tracking of every bed&apos;s status (occupied, cleaning, available).</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 p-1 bg-green-500/20 rounded text-green-500">
                                    <Network className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Sentinel Flow Algorithm</h4>
                                    <p className="text-sm text-slate-500">Proprietary graph traversal for optimal patient routing.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="flex-1 w-full h-[500px] relative">
                        {/* 3D Scene */}
                        <Canvas camera={{ position: [5, 2, 5], fov: 45 }}>
                            <ambientLight intensity={0.5} />
                            <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
                            <pointLight position={[-10, 5, 0]} intensity={1} color="#00f2ff" />
                            <FloatingServerRack />
                            <gridHelper args={[20, 20, 0x111111, 0x050505]} position={[0, -3, 0]} />
                        </Canvas>
                    </div>
                </div>
            </div>
        </section>
    );
}
