import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import vertex from './shaders/vertex.glsl';
import fragment from './shaders/fragment.glsl';
import { createCamera, createRenderer, getDefaultUniforms } from './core-utils';

const WIDTH = 40;
const HEIGHT = 40;
const TOTAL = WIDTH * HEIGHT;

export default function DotMesh() {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;
        const container = containerRef.current;
        const uniforms = getDefaultUniforms();
        const scene = new THREE.Scene();
        const renderer = createRenderer({ antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        const camera = createCamera(50, 0.01, 1000);
        camera.position.set(-2.0, 1.5, -0.4);
        camera.lookAt(0, 0, 0);

    const positions = new Float32Array(TOTAL * 3);
    const reference = new Float32Array(TOTAL * 2);
    const basePositions = new Float32Array(TOTAL * 3);
    for (let i = 0; i < TOTAL; i++) {
      const x = (i % WIDTH) / WIDTH * 2 - 1;
      const z = Math.floor(i / WIDTH) / HEIGHT * 2 - 1;
      const y = 0;
      positions.set([x, y, z], i * 3);
      reference.set([x, z], i * 2);
      basePositions.set([x, y, z], i * 3);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('reference', new THREE.BufferAttribute(reference, 2));
    geometry.setAttribute('basePosition', new THREE.BufferAttribute(basePositions, 3));

    const material = new THREE.ShaderMaterial({
      uniforms: { ...uniforms },
      blending: THREE.AdditiveBlending,
      vertexShader: vertex,
      fragmentShader: fragment,
      transparent: true,
      depthTest: false,
    });

    const particles = new THREE.Points(geometry, material);
    particles.rotation.y = Math.PI / 4;
    scene.add(particles);


    let animationId;
    const startTime = performance.now();
    function animate() {
      const elapsed = (performance.now() - startTime) * 0.001;
      if (uniforms.u_time !== undefined) {
        uniforms.u_time.value = elapsed;
      }
      particles.rotation.y += 0.0; // No auto-rotation
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    }
    animate();

    function handleResize() {
      renderer.setSize(container.clientWidth, container.clientHeight);
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
    }
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100vw', height: '100vh' }} />;
}
