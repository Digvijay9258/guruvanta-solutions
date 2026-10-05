'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const NODES = [
  { id: 'erp', label: 'ERP' },
  { id: 'crm', label: 'CRM' },
  { id: 'billing', label: 'Billing' },
  { id: 'inventory', label: 'Inventory' },
  { id: 'hr', label: 'HR' },
  { id: 'payroll', label: 'Payroll' },
  { id: 'pos', label: 'POS' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'ai', label: 'AI' },
  { id: 'automation', label: 'Automation' },
  { id: 'whatsapp', label: 'WhatsApp' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'cloud', label: 'Cloud' },
  { id: 'api', label: 'API' },
  { id: 'hospital', label: 'Hospital' },
  { id: 'restaurant', label: 'Restaurant' },
  { id: 'hotel', label: 'Hotel' },
  { id: 'pharmacy', label: 'Pharmacy' },
  { id: 'jewellery', label: 'Jewellery' },
  { id: 'manufacturing', label: 'Manufacturing' },
  { id: 'logistics', label: 'Logistics' },
];

export default function ThreeFibonacciSphere() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<string | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 700;

    const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 1000);
    camera.position.z = 8.5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Master Group containing the 3D sphere ecosystem
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // Inner wireframe nucleus / geodesic network
    const coreGeo = new THREE.IcosahedronGeometry(2.3, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x33333b,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    masterGroup.add(coreMesh);

    // Concentric ring guides
    const ringGeo = new THREE.RingGeometry(3.6, 3.62, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.08,
      side: THREE.DoubleSide,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2.3;
    masterGroup.add(ringMesh);

    // Distribute 21 nodes along Fibonacci sphere
    const count = NODES.length;
    const radius = 3.6;
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    const nodeObjects: {
      id: string;
      label: string;
      sprite: THREE.Sprite;
      corePoint: THREE.Vector3;
      anchorMesh: THREE.Mesh;
    }[] = [];

    // Helper to create high-resolution crisp canvas text sprite
    const createTextSprite = (text: string) => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 160;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, 512, 160);

        // Rounded pill background
        ctx.fillStyle = 'rgba(10, 10, 14, 0.85)';
        ctx.beginPath();
        ctx.roundRect(16, 20, 480, 120, 24);
        ctx.fill();

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
        ctx.lineWidth = 4;
        ctx.stroke();

        // Text styling
        ctx.fillStyle = '#ffffff';
        ctx.font = '600 44px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, 256, 80);
      }

      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearFilter;
      const spriteMaterial = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0.9,
        depthTest: false,
      });
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.scale.set(1.4, 0.44, 1);
      return sprite;
    };

    const linesGroup = new THREE.Group();
    masterGroup.add(linesGroup);

    for (let i = 0; i < count; i++) {
      const theta = 2 * Math.PI * i / goldenRatio;
      const phi = Math.acos(1 - 2 * (i + 0.5) / count);

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(theta) * Math.sin(phi);

      const pos = new THREE.Vector3(x, y, z);

      // Small glowing anchor sphere
      const dotGeo = new THREE.SphereGeometry(0.045, 12, 12);
      const dotMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const dotMesh = new THREE.Mesh(dotGeo, dotMat);
      dotMesh.position.copy(pos);
      masterGroup.add(dotMesh);

      // Label sprite
      const sprite = createTextSprite(NODES[i].label);
      // Offset sprite slightly outward from anchor
      const spritePos = pos.clone().multiplyScalar(1.08);
      sprite.position.copy(spritePos);
      masterGroup.add(sprite);

      // Line from center to node
      const lineMat = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.08,
      });
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        pos,
      ]);
      const line = new THREE.Line(lineGeo, lineMat);
      linesGroup.add(line);

      nodeObjects.push({
        id: NODES[i].id,
        label: NODES[i].label,
        sprite,
        corePoint: pos,
        anchorMesh: dotMesh,
      });
    }

    // Interaction State: Dragging, Momentum, Pointer reaction
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let velocity = { x: 0.0015, y: 0.001 };
    const pointer = { x: 0, y: 0 };

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      previousMousePosition = { x: clientX, y: clientY };
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      // Pointer tilt calculation
      const rect = container.getBoundingClientRect();
      pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;

      if (isDragging) {
        const deltaX = clientX - previousMousePosition.x;
        const deltaY = clientY - previousMousePosition.y;

        velocity = {
          x: deltaX * 0.004,
          y: deltaY * 0.004,
        };

        masterGroup.rotation.y += velocity.x;
        masterGroup.rotation.x += velocity.y;

        previousMousePosition = { x: clientX, y: clientY };
      }
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    // Scroll depth effect: slight camera push on scroll
    let scrollOffset = 0;
    const onScroll = () => {
      scrollOffset = window.scrollY * 0.0015;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    container.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    container.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    // Responsive resize handler
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', onResize);

    // Animation Loop
    let animationId: number;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (!prefersReducedMotion) {
        if (!isDragging) {
          // Natural slow rotation
          masterGroup.rotation.y += 0.0022 + velocity.x;
          masterGroup.rotation.x += 0.0006 + velocity.y;

          // Friction damping on drag release
          velocity.x *= 0.94;
          velocity.y *= 0.94;
        }

        // Gentle interactive tilt towards pointer
        camera.position.x += (pointer.x * 0.6 - camera.position.x) * 0.04;
        camera.position.y += (pointer.y * 0.6 - camera.position.y) * 0.04;
        camera.position.z = 8.5 + scrollOffset;
        camera.lookAt(0, 0, 0);

        // Core pulsating wireframe counter-rotation
        coreMesh.rotation.y -= 0.003;
        coreMesh.rotation.z += 0.0015;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('scroll', onScroll);
      container.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      container.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);
      window.removeEventListener('resize', onResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing select-none"
      aria-label="3D Interactive Business Architecture Archive"
    />
  );
}
