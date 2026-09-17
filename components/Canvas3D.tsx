'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Canvas3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 32;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountNode.appendChild(renderer.domElement);

    // Particle Cloud
    const particleCount = 280;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color('#00f0ff');
    const purpleColor = new THREE.Color('#9333ea');
    const whiteColor = new THREE.Color('#ffffff');

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80;

      const randomVal = Math.random();
      const col = randomVal > 0.6 ? cyanColor : randomVal > 0.3 ? purpleColor : whiteColor;
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.9,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Dynamic 3D Geometric Polyhedron Core
    const polyhedronGeo = new THREE.IcosahedronGeometry(13, 1);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.16,
    });
    const polyhedron = new THREE.Mesh(polyhedronGeo, wireframeMat);
    scene.add(polyhedron);

    // Inner Glowing Cyan Lattice
    const innerGeo = new THREE.OctahedronGeometry(7, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerCore);

    // Floating Ring
    const torusGeo = new THREE.TorusGeometry(18, 0.1, 16, 100);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.15,
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.rotation.x = Math.PI / 3;
    scene.add(torus);

    // Mouse Interaction Physics
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.001;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.001;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      polyhedron.rotation.x = elapsedTime * 0.15 + targetY * 0.5;
      polyhedron.rotation.y = elapsedTime * 0.2 + targetX * 0.5;

      innerCore.rotation.x = -elapsedTime * 0.25;
      innerCore.rotation.y = -elapsedTime * 0.3;

      torus.rotation.z = elapsedTime * 0.1;
      torus.rotation.y = targetX * 0.3;

      particles.rotation.y = elapsedTime * 0.03 + targetX * 0.2;
      particles.rotation.x = elapsedTime * 0.02 + targetY * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (mountNode && renderer.domElement) {
        mountNode.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      polyhedronGeo.dispose();
      wireframeMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.9,
      }}
    />
  );
}
