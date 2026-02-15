"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import { Card } from "@/components/ui/Card";

function NetworkNodes() {
    const groupRef = useRef<THREE.Group>(null);

    // Create random nodes using useState for stable initialization
    const [nodes] = useState(() => {
        return new Array(8).fill(0).map(() => ({
            position: [
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 6,
                (Math.random() - 0.5) * 4
            ] as [number, number, number]
        }));
    });

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Central Node */}
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial color="#00f2ff" emissive="#00f2ff" emissiveIntensity={2} />
            </mesh>

            {/* Satellite Nodes & Connections */}
            {nodes.map((node, i) => (
                <group key={i}>
                    <mesh position={node.position}>
                        <sphereGeometry args={[0.2, 16, 16]} />
                        <meshStandardMaterial color="#8A2BE2" emissive="#8A2BE2" emissiveIntensity={1} />
                    </mesh>
                    <line>
                        <bufferGeometry attach="geometry" onUpdate={self => {
                            const points = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(...node.position)];
                            self.setFromPoints(points);
                        }} />
                        <lineBasicMaterial attach="material" color="#00f2ff" transparent opacity={0.2} />
                    </line>
                </group>
            ))}
        </group>
    );
}

export function ScaleSection() {
    return (
        <section className="py-24 relative min-h-[600px] flex items-center overflow-hidden bg-black">
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 10] }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <NetworkNodes />
                </Canvas>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pointer-events-none">
                <div className="max-w-sm ml-auto text-right pointer-events-auto">
                    <Card glow className="bg-black/80 backdrop-blur-md border-phrelis-blue/30 p-8">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            City-Wide <br /><span className="text-phrelis-blue">Scale</span>
                        </h2>
                        <p className="text-slate-400 mb-6">
                            Command Centre logic instantly routes ambulances to the optimal node within the network, balancing load and saving minutes that matter.
                        </p>
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                                <span className="text-white">Phrelis Core</span>
                                <span className="text-phrelis-blue">94% Capacity</span>
                            </div>
                            <div className="w-full h-1 bg-white/10 rounded-full">
                                <div className="h-full w-[94%] bg-phrelis-blue" />
                            </div>

                            <div className="flex justify-between text-sm mt-4">
                                <span className="text-white">Mercy General</span>
                                <span className="text-green-400">42% Capacity</span>
                            </div>
                            <div className="w-full h-1 bg-white/10 rounded-full">
                                <div className="h-full w-[42%] bg-green-400" />
                            </div>

                            <div className="mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-xs font-mono">
                                &gt; ALERT: DIVERT TRAFFIC TO MERCY GENERAL
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
