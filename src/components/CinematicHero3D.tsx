import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Compass, Sparkles, CheckCircle2, ChevronRight, Laptop, Briefcase, Award, ArrowRight } from 'lucide-react';
import { Link } from '../lib/router';

export interface MilestoneInfo {
  id: number;
  label: string;
  sub: string;
  stage: string;
  status: 'completed' | 'active' | 'upcoming';
  description: string;
  tool: string;
}

export const MILESTONES: MilestoneInfo[] = [
  {
    id: 0,
    label: 'Choose a Skill',
    sub: 'Market-Ready Focus',
    stage: '01 · Discover',
    status: 'completed',
    description: 'Select a verified commercial craft: Technical Copywriting, Full-stack UI, or Ops.',
    tool: 'Skill Matrix',
  },
  {
    id: 1,
    label: 'Portfolio Ready',
    sub: '3 Case Studies',
    stage: '02 · Build',
    status: 'completed',
    description: 'Construct 3 verifiable public proof-of-work case studies before bidding.',
    tool: 'Notion + GitHub',
  },
  {
    id: 2,
    label: 'New Opportunity',
    sub: 'Targeted Outreach',
    stage: '03 · Apply',
    status: 'completed',
    description: 'Scan curated remote boards and submit bespoke, problem-solving pitches.',
    tool: 'Remote Boards',
  },
  {
    id: 3,
    label: 'Client Message',
    sub: 'Contract Negotiation',
    stage: '04 · Land',
    status: 'active',
    description: 'Received first inbound client inquiry: Scope alignment & milestone escrow.',
    tool: 'Direct Contracts',
  },
  {
    id: 4,
    label: 'Project Complete',
    sub: 'Proof Delivered',
    stage: '05 · Deliver',
    status: 'upcoming',
    description: 'Flawless deliverable handover, client sign-off, and 5-star testimonial.',
    tool: 'Figma & Loom',
  },
  {
    id: 5,
    label: 'Remote Role',
    sub: 'USD Retainer',
    stage: '06 · Retain',
    status: 'upcoming',
    description: 'Transition from hourly gig work into recurring monthly international contracts.',
    tool: 'Wise Multi-Currency',
  },
  {
    id: 6,
    label: 'Level Up',
    sub: 'Sustainable Career',
    stage: '07 · Scale',
    status: 'upcoming',
    description: 'Package your knowledge into digital resources, team scaling, and higher rates.',
    tool: 'Product Storefront',
  },
];

export const CinematicHero3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);
  const [activeMilestone, setActiveMilestone] = useState<number>(3); // Default to 'Client Message'
  const [isWebGLAvailable, setIsWebGLAvailable] = useState<boolean>(true);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const canvasContainer = canvasContainerRef.current;
    if (!canvasContainer) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Test WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setIsWebGLAvailable(false);
        return;
      }
    } catch {
      setIsWebGLAvailable(false);
      return;
    }

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    scene.background = null; // Transparent background to blend with Warm Ivory

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      42,
      canvasContainer.clientWidth / canvasContainer.clientHeight,
      0.1,
      100
    );
    // Initial camera position pulled back for cinematic entrance
    const initialCamZ = prefersReducedMotion ? 9.2 : 12.5;
    const targetCamZ = 9.2;
    camera.position.set(2.8, 4.2, initialCamZ);
    camera.lookAt(0, 0.4, 0);

    // Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      canvasContainer.appendChild(renderer.domElement);
    } catch {
      setIsWebGLAvailable(false);
      return;
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0xfff8ee, 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfff5e4, 2.0);
    dirLight.position.set(6, 10, 7);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 25;
    dirLight.shadow.bias = -0.001;
    scene.add(dirLight);

    // Subtle Forest Green / Emerald rim fill light
    const fillLight = new THREE.DirectionalLight(0x0e7345, 1.4);
    fillLight.position.set(-6, -2, -4);
    scene.add(fillLight);

    // Warm Gold accent light
    const goldLight = new THREE.PointLight(0xd4af37, 2.5, 10);
    goldLight.position.set(1.5, 2.2, 1);
    scene.add(goldLight);

    // Emerald path point light
    const pathPointLight = new THREE.PointLight(0x085536, 3.0, 8);
    pathPointLight.position.set(-0.5, 1.2, 0.5);
    scene.add(pathPointLight);

    // Root Group for Mouse Parallax
    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // ==========================================
    // 1. FLOATING LANDSCAPE / PLATFORM
    // ==========================================
    // Tiered low-poly island base
    const baseGroup = new THREE.Group();
    worldGroup.add(baseGroup);

    // Bottom dark pedestal layer
    const bottomGeo = new THREE.CylinderGeometry(3.6, 2.6, 0.6, 8);
    const bottomMat = new THREE.MeshStandardMaterial({
      color: 0x18221d,
      roughness: 0.85,
      metalness: 0.1,
    });
    const bottomMesh = new THREE.Mesh(bottomGeo, bottomMat);
    bottomMesh.position.y = -0.9;
    bottomMesh.receiveShadow = true;
    baseGroup.add(bottomMesh);

    // Middle terraced stone layer
    const midGeo = new THREE.CylinderGeometry(3.8, 3.6, 0.5, 8);
    const midMat = new THREE.MeshStandardMaterial({
      color: 0xeae5d9,
      roughness: 0.7,
      metalness: 0.05,
    });
    const midMesh = new THREE.Mesh(midGeo, midMat);
    midMesh.position.y = -0.4;
    midMesh.receiveShadow = true;
    baseGroup.add(midMesh);

    // Top Emerald grass surface
    const topGeo = new THREE.CylinderGeometry(3.9, 3.8, 0.4, 8);
    const topMat = new THREE.MeshStandardMaterial({
      color: 0x085536,
      roughness: 0.65,
      metalness: 0.15,
    });
    const topMesh = new THREE.Mesh(topGeo, topMat);
    topMesh.position.y = 0.05;
    topMesh.receiveShadow = true;
    baseGroup.add(topMesh);

    // Secondary elevated tier (representing "Growth" / "Level Up" plateau)
    const plateauGeo = new THREE.CylinderGeometry(1.4, 1.6, 0.5, 6);
    const plateauMat = new THREE.MeshStandardMaterial({
      color: 0x0e7345,
      roughness: 0.5,
      metalness: 0.2,
    });
    const plateauMesh = new THREE.Mesh(plateauGeo, plateauMat);
    plateauMesh.position.set(1.4, 0.45, -0.6);
    plateauMesh.castShadow = true;
    plateauMesh.receiveShadow = true;
    baseGroup.add(plateauMesh);

    // ==========================================
    // 2. WINDING GLOWING CAREER PATH
    // ==========================================
    const pathPoints = [
      new THREE.Vector3(-2.4, 0.32, 1.6),   // 0: Choose a Skill
      new THREE.Vector3(-1.6, 0.32, 0.6),   // 1: Portfolio Ready
      new THREE.Vector3(-0.6, 0.32, 1.2),   // 2: New Opportunity
      new THREE.Vector3(0.1, 0.34, 0.1),    // 3: Client Message
      new THREE.Vector3(0.8, 0.42, 0.8),    // 4: Project Complete
      new THREE.Vector3(1.3, 0.72, -0.2),   // 5: Remote Role
      new THREE.Vector3(1.6, 0.82, -1.0),   // 6: Level Up
    ];

    const curve = new THREE.CatmullRomCurve3(pathPoints);
    const tubeGeo = new THREE.TubeGeometry(curve, 64, 0.07, 8, false);
    const tubeMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      emissive: 0x0e7345,
      emissiveIntensity: 0.8,
      roughness: 0.3,
      metalness: 0.5,
    });
    const pathMesh = new THREE.Mesh(tubeGeo, tubeMat);
    pathMesh.castShadow = true;
    worldGroup.add(pathMesh);

    // Under-glow ribbon for the path
    const underTubeGeo = new THREE.TubeGeometry(curve, 64, 0.12, 6, false);
    const underTubeMat = new THREE.MeshBasicMaterial({
      color: 0x0e7345,
      transparent: true,
      opacity: 0.35,
    });
    const underPathMesh = new THREE.Mesh(underTubeGeo, underTubeMat);
    worldGroup.add(underPathMesh);

    // ==========================================
    // 3. MILESTONE MARKERS & INTERACTION NODES
    // ==========================================
    const milestoneObjects: THREE.Group[] = [];
    const raycastTargets: THREE.Mesh[] = [];

    pathPoints.forEach((pt, index) => {
      const nodeGroup = new THREE.Group();
      nodeGroup.position.copy(pt);

      // Node base ring
      const ringGeo = new THREE.RingGeometry(0.12, 0.18, 16);
      ringGeo.rotateX(-Math.PI / 2);
      const ringMat = new THREE.MeshBasicMaterial({
        color: index <= 3 ? 0xd4af37 : 0xeae5d9,
        side: THREE.DoubleSide,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.position.y = 0.02;
      nodeGroup.add(ringMesh);

      // Node pin cylinder
      const pinGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.22, 8);
      const pinMat = new THREE.MeshStandardMaterial({
        color: 0x18221d,
        metalness: 0.4,
        roughness: 0.4,
      });
      const pinMesh = new THREE.Mesh(pinGeo, pinMat);
      pinMesh.position.y = 0.11;
      nodeGroup.add(pinMesh);

      // Node sphere / marker head
      const isCurrent = index === 3;
      const sphereGeo = new THREE.SphereGeometry(isCurrent ? 0.14 : 0.1, 16, 16);
      const sphereMat = new THREE.MeshStandardMaterial({
        color: isCurrent ? 0xd4af37 : index < 3 ? 0x0e7345 : 0xfdfbf7,
        emissive: isCurrent ? 0xd4af37 : index < 3 ? 0x085536 : 0x000000,
        emissiveIntensity: isCurrent ? 0.9 : 0.3,
        roughness: 0.2,
        metalness: 0.6,
      });
      const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
      sphereMesh.position.y = 0.26;
      sphereMesh.castShadow = true;
      sphereMesh.userData = { milestoneIndex: index };
      nodeGroup.add(sphereMesh);
      raycastTargets.push(sphereMesh);

      // Pulsing beacon ring for the active milestone
      if (isCurrent) {
        const beaconGeo = new THREE.RingGeometry(0.18, 0.24, 20);
        beaconGeo.rotateX(-Math.PI / 2);
        const beaconMat = new THREE.MeshBasicMaterial({
          color: 0xd4af37,
          transparent: true,
          opacity: 0.6,
          side: THREE.DoubleSide,
        });
        const beaconMesh = new THREE.Mesh(beaconGeo, beaconMat);
        beaconMesh.position.y = 0.03;
        beaconMesh.name = 'beaconRing';
        nodeGroup.add(beaconMesh);
      }

      worldGroup.add(nodeGroup);
      milestoneObjects.push(nodeGroup);
    });

    // ==========================================
    // 4. MINIATURE MODERN WORKSPACE SCENE
    // ==========================================
    const workspaceGroup = new THREE.Group();
    workspaceGroup.position.set(-0.2, 0.35, -0.4);
    worldGroup.add(workspaceGroup);

    // Minimalist Studio Desk
    const deskTopGeo = new THREE.BoxGeometry(0.9, 0.04, 0.55);
    const deskTopMat = new THREE.MeshStandardMaterial({
      color: 0xf6f3eb,
      roughness: 0.3,
      metalness: 0.1,
    });
    const deskMesh = new THREE.Mesh(deskTopGeo, deskTopMat);
    deskMesh.position.y = 0.28;
    deskMesh.castShadow = true;
    deskMesh.receiveShadow = true;
    workspaceGroup.add(deskMesh);

    // Desk legs (sleek black metal)
    const legGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.28, 8);
    const legMat = new THREE.MeshStandardMaterial({ color: 0x18221d, metalness: 0.7, roughness: 0.3 });
    [
      [-0.4, -0.22],
      [0.4, -0.22],
      [-0.4, 0.22],
      [0.4, 0.22],
    ].forEach(([lx, lz]) => {
      const leg = new THREE.Mesh(legGeo, legMat);
      leg.position.set(lx, 0.14, lz);
      leg.castShadow = true;
      workspaceGroup.add(leg);
    });

    // Modern Laptop
    const laptopGroup = new THREE.Group();
    laptopGroup.position.set(0, 0.31, 0.02);
    workspaceGroup.add(laptopGroup);

    // Laptop Base
    const laptopBaseGeo = new THREE.BoxGeometry(0.28, 0.012, 0.2);
    const laptopBaseMat = new THREE.MeshStandardMaterial({
      color: 0x24322a,
      metalness: 0.8,
      roughness: 0.25,
    });
    const laptopBase = new THREE.Mesh(laptopBaseGeo, laptopBaseMat);
    laptopGroup.add(laptopBase);

    // Laptop Screen (tilted open at 115 degrees)
    const laptopScreenGeo = new THREE.BoxGeometry(0.28, 0.19, 0.008);
    const laptopScreenMat = new THREE.MeshStandardMaterial({
      color: 0x18221d,
      metalness: 0.8,
      roughness: 0.2,
    });
    const laptopScreen = new THREE.Mesh(laptopScreenGeo, laptopScreenMat);
    laptopScreen.position.set(0, 0.095, -0.1);
    laptopScreen.rotation.x = -0.35; // open angle

    // Glowing screen display plane (emerald/cyan coding/design workspace)
    const screenDisplayGeo = new THREE.PlaneGeometry(0.26, 0.17);
    const screenDisplayMat = new THREE.MeshBasicMaterial({
      color: 0x085536,
    });
    const screenDisplay = new THREE.Mesh(screenDisplayGeo, screenDisplayMat);
    screenDisplay.position.set(0, 0, 0.005);
    laptopScreen.add(screenDisplay);
    laptopGroup.add(laptopScreen);

    // ==========================================
    // 5. FLOATING PORTFOLIO PANE & CLIENT MESSAGE NOTIFICATION
    // ==========================================
    // Floating semi-transparent portfolio screen
    const portfolioScreenGeo = new THREE.BoxGeometry(0.48, 0.32, 0.015);
    const portfolioScreenMat = new THREE.MeshStandardMaterial({
      color: 0xfdfbf7,
      roughness: 0.2,
      metalness: 0.1,
      transparent: true,
      opacity: 0.92,
    });
    const portfolioMesh = new THREE.Mesh(portfolioScreenGeo, portfolioScreenMat);
    portfolioMesh.position.set(-1.1, 0.95, 0.3);
    portfolioMesh.rotation.set(0.1, 0.45, -0.05);
    portfolioMesh.castShadow = true;
    worldGroup.add(portfolioMesh);

    // Floating Client Message Notification Pill
    const notifGroup = new THREE.Group();
    notifGroup.position.set(0.4, 1.15, 0.4);
    worldGroup.add(notifGroup);

    const pillGeo = new THREE.BoxGeometry(0.62, 0.16, 0.02);
    const pillMat = new THREE.MeshStandardMaterial({
      color: 0x085536,
      roughness: 0.2,
      metalness: 0.3,
      emissive: 0x053b25,
      emissiveIntensity: 0.6,
    });
    const pillMesh = new THREE.Mesh(pillGeo, pillMat);
    notifGroup.add(pillMesh);

    // Notification green light dot
    const notifDotGeo = new THREE.SphereGeometry(0.035, 12, 12);
    const notifDotMat = new THREE.MeshBasicMaterial({ color: 0xd4af37 });
    const notifDot = new THREE.Mesh(notifDotGeo, notifDotMat);
    notifDot.position.set(-0.23, 0, 0.02);
    notifGroup.add(notifDot);

    // ==========================================
    // 6. GLOBAL NETWORK ORBITAL RINGS & NODES
    // ==========================================
    const orbitGroup = new THREE.Group();
    orbitGroup.position.set(0, 0.6, 0);
    worldGroup.add(orbitGroup);

    // Planetary latitude wireframe ring 1
    const ring1Geo = new THREE.TorusGeometry(3.3, 0.012, 12, 80);
    ring1Geo.rotateX(Math.PI / 2.3);
    ring1Geo.rotateY(0.2);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      transparent: true,
      opacity: 0.4,
    });
    const ring1Mesh = new THREE.Mesh(ring1Geo, ring1Mat);
    orbitGroup.add(ring1Mesh);

    // Planetary latitude wireframe ring 2
    const ring2Geo = new THREE.TorusGeometry(2.9, 0.01, 12, 80);
    ring2Geo.rotateX(Math.PI / 1.8);
    ring2Geo.rotateZ(0.5);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x0e7345,
      transparent: true,
      opacity: 0.35,
    });
    const ring2Mesh = new THREE.Mesh(ring2Geo, ring2Mat);
    orbitGroup.add(ring2Mesh);

    // Small floating satellite milestone/token markers
    const tokenPoints = [
      new THREE.Vector3(2.6, 1.8, -1.2),
      new THREE.Vector3(-2.4, 2.0, 1.4),
      new THREE.Vector3(1.8, 2.4, 1.6),
    ];
    tokenPoints.forEach((tp) => {
      const tokenGeo = new THREE.OctahedronGeometry(0.12, 0);
      const tokenMat = new THREE.MeshStandardMaterial({
        color: 0xd4af37,
        emissive: 0x997316,
        emissiveIntensity: 0.4,
        roughness: 0.2,
        metalness: 0.8,
      });
      const tokenMesh = new THREE.Mesh(tokenGeo, tokenMat);
      tokenMesh.position.copy(tp);
      orbitGroup.add(tokenMesh);
    });

    // ==========================================
    // 7. MOUSE PARALLAX & ANIMATION LOOP
    // ==========================================
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvasContainer.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = x;
      mouse.targetY = y;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Click Raycasting to select milestones directly in the 3D scene
    const raycaster = new THREE.Raycaster();
    const clickMouse = new THREE.Vector2();

    const onCanvasClick = (e: MouseEvent) => {
      const rect = canvasContainer.getBoundingClientRect();
      clickMouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      clickMouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      raycaster.setFromCamera(clickMouse, camera);
      const intersects = raycaster.intersectObjects(raycastTargets);
      if (intersects.length > 0) {
        const hit = intersects[0].object;
        if (hit.userData && typeof hit.userData.milestoneIndex === 'number') {
          setActiveMilestone(hit.userData.milestoneIndex);
        }
      }
    };
    canvasContainer.addEventListener('click', onCanvasClick);

    // Resize Handler
    const onResize = () => {
      if (!canvasContainer || !renderer) return;
      const width = canvasContainer.clientWidth;
      const height = canvasContainer.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', onResize);

    // Scroll Handler (subtle elevation of scene as user scrolls down)
    let scrollOffset = 0;
    const onScroll = () => {
      scrollOffset = Math.min(window.scrollY / 600, 1);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // Render Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Camera entrance dolly-in
      if (camera.position.z > targetCamZ + 0.05 && !prefersReducedMotion) {
        camera.position.z += (targetCamZ - camera.position.z) * 0.04;
      }

      // Smooth mouse parallax lerp (approx 5-15px effect)
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      if (!prefersReducedMotion) {
        // Very subtle camera sway & rotation
        camera.position.x = 2.8 + mouse.x * 0.35 + scrollOffset * 0.2;
        camera.position.y = 4.2 + mouse.y * 0.25 - scrollOffset * 0.3;
        camera.lookAt(mouse.x * 0.1, 0.4, mouse.y * 0.1);

        // Gentle floating animation for workspace & floating cards
        notifGroup.position.y = 1.15 + Math.sin(elapsedTime * 1.8) * 0.05;
        portfolioMesh.position.y = 0.95 + Math.sin(elapsedTime * 1.4 + 1) * 0.04;
        portfolioMesh.rotation.y = 0.45 + Math.cos(elapsedTime * 0.8) * 0.03;

        // Orbit ring slow rotation
        orbitGroup.rotation.y = elapsedTime * 0.08;

        // Active beacon ring pulse
        const beacon = worldGroup.getObjectByName('beaconRing') as THREE.Mesh;
        if (beacon) {
          const scale = 1 + Math.sin(elapsedTime * 3) * 0.25;
          beacon.scale.set(scale, scale, scale);
        }
      }

      renderer.render(scene, camera);
    };

    animate();
    setIsLoaded(true);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
      canvasContainer.removeEventListener('click', onCanvasClick);

      // Cleanup WebGL resources
      if (renderer && renderer.domElement) {
        canvasContainer.removeChild(renderer.domElement);
        renderer.dispose();
      }
      scene.clear();
    };
  }, []);

  const currentMilestoneData = MILESTONES[activeMilestone] || MILESTONES[3];

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-xl mx-auto lg:max-w-none flex flex-col items-center select-none"
    >
      {/* 3D Visual Frame */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[16/12] rounded-3xl border border-[#E5E0D4] bg-gradient-to-b from-[#FDFBF7] to-[#F6F3EB] p-3 sm:p-5 shadow-[0_12px_36px_-12px_rgba(24,34,29,0.08)] overflow-hidden">
        {/* Subtle decorative background grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#085536 1.5px, transparent 1.5px)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Top bar with platform tags */}
        <div className="relative z-10 flex items-center justify-between border-b border-[#EAE5D9]/80 pb-3 px-2">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#085536] text-[#FDFBF7] shadow-sm">
              <Compass className="h-4 w-4" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-[#18221D] leading-none">
                  Global Career World
                </span>
                <span className="text-[10px] font-bold text-[#085536] bg-[#085536]/10 px-1.5 py-0.5 rounded">
                  3D Quest
                </span>
              </div>
              <span className="text-[10px] text-[#5A6B63] hidden sm:inline">
                Interactive Milestone Journey · Click nodes to inspect
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#085536]/8 px-2.5 py-1 text-[11px] font-semibold text-[#085536]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#085536] animate-pulse" />
              <span>Path Synchronized</span>
            </span>
          </div>
        </div>

        {/* Three.js Canvas Container */}
        <div
          ref={canvasContainerRef}
          className="relative w-full h-[280px] sm:h-[340px] lg:h-[380px] cursor-grab active:cursor-grabbing"
        >
          {/* Fallback Static Visual if WebGL fails */}
          {!isWebGLAvailable && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[#F6F3EB]/80">
              <Compass className="h-12 w-12 text-[#085536] mb-3 animate-spin" />
              <h4 className="font-serif-heading text-lg font-bold text-[#18221D]">
                Interactive Global Career Quest
              </h4>
              <p className="text-xs text-[#5A6B63] max-w-sm mt-1">
                From choosing a skill to landing USD remote contracts and scaling into digital products.
              </p>
            </div>
          )}
        </div>

        {/* Floating Active Milestone Detail Overlay Card */}
        <div className="relative z-10 -mt-6 sm:-mt-8 mx-1 sm:mx-2 rounded-2xl border border-[#EAE5D9] bg-white/95 backdrop-blur-md p-4 sm:p-5 shadow-lg">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#085536]/10 text-[#085536]">
                <Award className="h-5 w-5 text-[#085536]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#085536] bg-[#085536]/8 px-2 py-0.5 rounded">
                    {currentMilestoneData.stage}
                  </span>
                  <span className="text-xs font-semibold text-[#5A6B63]">
                    {currentMilestoneData.sub}
                  </span>
                </div>
                <h4 className="font-serif-heading text-base sm:text-lg font-bold text-[#18221D] mt-0.5">
                  {currentMilestoneData.label}
                </h4>
              </div>
            </div>

            <div className="hidden sm:flex flex-col items-end text-right">
              <span className="text-[10px] uppercase font-bold text-[#5A6B63]">
                Recommended Tool
              </span>
              <span className="text-xs font-bold text-[#085536]">
                {currentMilestoneData.tool}
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#5A6B63] mt-2.5 leading-relaxed">
            {currentMilestoneData.description}
          </p>

          {/* Quick interactive milestone pills */}
          <div className="mt-3.5 pt-3 border-t border-[#EAE5D9]/80 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-1.5 shrink-0">
              {MILESTONES.map((m, idx) => (
                <button
                  key={m.id}
                  onClick={() => setActiveMilestone(idx)}
                  className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all ${
                    activeMilestone === idx
                      ? 'bg-[#085536] text-[#FDFBF7] shadow-sm scale-105'
                      : 'bg-[#F6F3EB] text-[#5A6B63] hover:text-[#18221D] hover:bg-[#EAE5D9]'
                  }`}
                >
                  0{idx + 1}
                </button>
              ))}
            </div>

            <Link
              to="/start-earning"
              className="text-xs font-bold text-[#085536] hover:text-[#0E7345] inline-flex items-center gap-1 shrink-0 ml-2"
            >
              <span>Explore Stage</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
