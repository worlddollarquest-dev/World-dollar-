import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Globe, Users, Sparkles, MapPin } from 'lucide-react';

interface HubNode {
  city: string;
  discipline: string;
  time: string;
  lat: number;
  lon: number;
}

const GLOBAL_HUBS: HubNode[] = [
  { city: 'Manila', discipline: 'SEO & Content Strategy', time: 'UTC+8', lat: 14.5995, lon: 120.9842 },
  { city: 'Lagos', discipline: 'Frontend & Systems Ops', time: 'UTC+1', lat: 6.5244, lon: 3.3792 },
  { city: 'São Paulo', discipline: 'Product UI & Prototyping', time: 'UTC-3', lat: -23.5505, lon: -46.6333 },
  { city: 'London', discipline: 'Copywriting & Consulting', time: 'UTC+0', lat: 51.5074, lon: -0.1278 },
  { city: 'Tokyo', discipline: 'Design Systems & 3D', time: 'UTC+9', lat: 35.6762, lon: 139.6503 },
  { city: 'Toronto', discipline: 'Full-Stack & APIs', time: 'UTC-5', lat: 43.6532, lon: -79.3832 },
  { city: 'Berlin', discipline: 'Growth & Analytics', time: 'UTC+1', lat: 52.52, lon: 13.405 },
];

export const CommunityNetworkVisual: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [activeHub, setActiveHub] = useState<HubNode>(GLOBAL_HUBS[0]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0.4, 4.4);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);
    } catch {
      return;
    }

    // Globe Group
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Subtle Wireframe Core Sphere
    const sphereRadius = 1.65;
    const wireGeo = new THREE.IcosahedronGeometry(sphereRadius, 3);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x0e7345,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    globeGroup.add(wireMesh);

    // Latitude Rings
    [-0.8, -0.4, 0, 0.4, 0.8].forEach((yOffset) => {
      const ringRadius = Math.sqrt(Math.max(0, sphereRadius * sphereRadius - yOffset * yOffset));
      const ringGeo = new THREE.BufferGeometry();
      const points: THREE.Vector3[] = [];
      const segments = 48;
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(theta) * ringRadius, yOffset, Math.sin(theta) * ringRadius));
      }
      ringGeo.setFromPoints(points);
      const ringMat = new THREE.LineBasicMaterial({
        color: 0x085536,
        transparent: true,
        opacity: 0.25,
      });
      const ringLine = new THREE.Line(ringGeo, ringMat);
      globeGroup.add(ringLine);
    });

    // Helper: Lat/Lon to 3D Cartesian coordinates
    const latLonToVector3 = (lat: number, lon: number, radius: number): THREE.Vector3 => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      const x = -(radius * Math.sin(phi) * Math.cos(theta));
      const z = radius * Math.sin(phi) * Math.sin(theta);
      const y = radius * Math.cos(phi);
      return new THREE.Vector3(x, y, z);
    };

    // Plot Hub Nodes
    const hubPoints: THREE.Vector3[] = [];
    GLOBAL_HUBS.forEach((hub, idx) => {
      const vec = latLonToVector3(hub.lat, hub.lon, sphereRadius * 1.02);
      hubPoints.push(vec);

      // Node marker
      const nodeGeo = new THREE.SphereGeometry(0.045, 12, 12);
      const nodeMat = new THREE.MeshBasicMaterial({
        color: idx === 0 ? 0xd4af37 : 0xfdfbf7,
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.copy(vec);
      globeGroup.add(nodeMesh);

      // Glow halo
      const haloGeo = new THREE.RingGeometry(0.05, 0.08, 16);
      haloGeo.lookAt(vec);
      const haloMat = new THREE.MeshBasicMaterial({
        color: 0xd4af37,
        transparent: true,
        opacity: 0.6,
        side: THREE.DoubleSide,
      });
      const haloMesh = new THREE.Mesh(haloGeo, haloMat);
      haloMesh.position.copy(vec.clone().multiplyScalar(1.01));
      globeGroup.add(haloMesh);
    });

    // Create Luminous Connection Arcs Between Hubs
    for (let i = 0; i < hubPoints.length; i++) {
      const p1 = hubPoints[i];
      const p2 = hubPoints[(i + 1) % hubPoints.length];
      const midPoint = new THREE.Vector3()
        .addVectors(p1, p2)
        .multiplyScalar(0.5)
        .normalize()
        .multiplyScalar(sphereRadius * 1.25); // Elevated arc

      const arcCurve = new THREE.QuadraticBezierCurve3(p1, midPoint, p2);
      const arcGeo = new THREE.BufferGeometry().setFromPoints(arcCurve.getPoints(32));
      const arcMat = new THREE.LineBasicMaterial({
        color: 0xd4af37,
        transparent: true,
        opacity: 0.5,
      });
      const arcLine = new THREE.Line(arcGeo, arcMat);
      globeGroup.add(arcLine);
    }

    // Resize Handler
    const handleResize = () => {
      if (!container || !renderer) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!prefersReducedMotion) {
        globeGroup.rotation.y += 0.003;
        globeGroup.rotation.x = 0.2 + Math.sin(Date.now() * 0.0008) * 0.05;
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (renderer && renderer.domElement) {
        container.removeChild(renderer.domElement);
        renderer.dispose();
      }
      scene.clear();
    };
  }, []);

  return (
    <div className="relative w-full aspect-[16/11] sm:aspect-[16/9] lg:aspect-[16/10] rounded-3xl bg-[#053B25]/60 border border-white/15 overflow-hidden flex items-center justify-center">
      {/* 3D Canvas Mount */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full" />

      {/* Floating Info Overlay for Global Hubs */}
      <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-xs z-10 rounded-2xl border border-white/20 bg-[#085536]/90 backdrop-blur-md p-3.5 sm:p-4 text-white shadow-xl">
        <div className="flex items-center justify-between border-b border-white/15 pb-2 mb-2.5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37] animate-ping" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-white/80">
              Active Global Hub
            </span>
          </div>
          <span className="text-[10px] font-semibold text-[#D4AF37]">
            {activeHub.time}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <h4 className="font-serif-heading text-lg font-bold text-white">
            {activeHub.city}
          </h4>
          <span className="text-xs text-white/70">Worldwide Hub</span>
        </div>
        <p className="text-xs text-white/80 mt-1">
          {activeHub.discipline}
        </p>

        {/* Quick Hub Switcher */}
        <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {GLOBAL_HUBS.map((hub) => (
            <button
              key={hub.city}
              onClick={() => setActiveHub(hub)}
              className={`px-2 py-0.5 text-[10px] font-bold rounded-md transition-all whitespace-nowrap ${
                activeHub.city === hub.city
                  ? 'bg-[#D4AF37] text-[#18221D]'
                  : 'bg-white/10 text-white/70 hover:text-white hover:bg-white/20'
              }`}
            >
              {hub.city}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
